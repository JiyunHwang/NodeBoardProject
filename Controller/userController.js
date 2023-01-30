import connection from "../db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const saltRounds = 10;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

/* define user method */
// login page
export const renderLoginPage = (req, res) => {
    return res.render("login_page")
}

export const login = (req, res) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    const params = [];
    params.push(req.body.userId);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
        if(!rows) {
            res.json({
                err: 'dbErr',
                message: "Cannot Find User! Please Check your ID."
            });
        }

        const checkPW = () => {
            bcrypt.compare(req.body.userPassword, rows[0].password, (error, isMatch) => {
              if (error) {
                return res.status(500).json({ error: "something wrong" });
              }
              if (isMatch) {
                // 비밀번호가 맞으면 token을 생성해야 합니다.
                // secret 토큰 값은 특정 유저를 감별하는데 사용합니다.
    
                // 토큰 생성 7일간 유효
                const token = jwt.sign({ userID: req.body.uerId }, SECRET_TOKEN, {expiresIn: '7d'});
                // DB에 token 저장한 후에는 cookie에 토큰을 저장하여 이용자를 식별합니다.
                return res
                .cookie("x_auth", token, {
                  maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
                  httpOnly: true,
                })
                .status(200)
                .json({ loginSuccess: true, userId: req.body.userId });
              } else {
                return res.status(403).json({
                  loginSuccess: false,
                  message: "비밀번호가 틀렸습니다.",
                });
              }
            });
          };
          checkPW();
    });
}

// do logout
export const logout = (req, res) => {
    res.send("logout");
}

export const renderJoinPage = (req, res) => {
    return res.render("join_page");
}

// join page
export const joinSite = async (req, res) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    const params = [];
    params.push(req.body.userId);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
        if(rows.length > 0) {
            res.json({
                err: 'dbErr',
                message: "Entered ID is already used."
            });
        }
        bcrypt.genSalt(saltRounds, (err, salt) => {
            // 솔트 생성 실패시
            if (err)
              return res.status(500).json({
                registerSuccess: false,
                message: "비밀번호 해쉬화에 실패했습니다.",
              });
            // salt 생성에 성공시 hash 진행
            bcrypt.hash(req.body.userPassword, salt, async (err, hash) => {
                if (err)
                  return res.status(500).json({
                    registerSuccess: false,
                    message: "비밀번호 해쉬화에 실패했습니다.",
                  });
                
                const sql = "INSERT INTO `user` (`id`, `nickname`, `password`) VALUES (?, ?, ?)";
                const params = [];
                params.push(req.body.userId);
                params.push(req.body.userNickname);
                params.push(hash);
                connection.query(sql, params, (err, rows, fields) => {
                    if(err) console.log(err);
                    if(rows.affectedRows){
                        return res.json({ registerSuccess: true });
                    }
                });
              });
        });
    });
}

export const getIsLogin = () => {
    // --- return login status
    return true;
}

export const getUserInfo = () => {
    // --- get user information from database using service object and return
    return {nickname: 'Jiyun'}
}