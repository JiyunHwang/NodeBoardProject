import connection from "../db.js"

/* define board method */
// list posts of :boardId

/* Methods relate to render pages */
export const listPost = (req, res, next) => {
    // --- get data from database using service object
    req.postData = [];

    const sql = "SELECT * FROM board_post WHERE board_seq = ?";
    const params = [];
    params.push(1);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
        if(rows.length){
            req.postData = rows;
            next();
        }
    });

    // --- get data from database using service object
}

export const renderListPost = (req, res) => {
    return res.render("board_list", {boardName: req.params.boardId, postData: req.postData});
}

export const renderInsertPost = (req, res) => {
    return res.render("board_write", {boardName: req.params.boardId});
}

export const renderUpdatePost = (req, res) => {
    return res.send("update");
}

export const renderViewPost = (req, res) => {
    return res.render("board_view", {postInfo : req.postInfo});
}

export const deletePost = (req, res) => {
    return res.send("delete");
}

export const searchBoard = (req, res, next) => {
    return res.send("search");
}

/* Methods relate to crud data */
export const insertPost = async (req, res) => {
    const sql = "INSERT INTO `board_post` (`board_seq`, `title`, `content`, `insert_user_seq`, `update_user_seq`, `delete_user_seq`) VALUES (1, ?, ?, 1, 1, 1)";
    const params = [];
    const data = req.body;
    params.push(data.boardTitle);
    params.push(data.boardContent);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
        if(rows.affectedRows){
            return res.send('Posting Succeed!');
        }
    });
}

export const viewPost = async (req, res, next) => {
    const sql = "SELECT * FROM `board_post` WHERE seq = ?";
    const params = [];
    params.push(req.params.postId);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
        if(rows.length){
            req.postInfo = rows[0];
            next();
        }
    });
}

export const updatePost = async (req, res) => {

}