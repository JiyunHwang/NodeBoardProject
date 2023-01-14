/* get Controllers */
import {getIsLogin, getUserInfo} from "./userController.js"

/* define default methods */

export const home = (req, res, next) => {
    // (params, err) => {
    //     if(err){
    //         next(err);
    //     }else{
    //         res.send("home");
    //     }
    // }

    // --- get board list from database using service object
    let boardList = ['board1', 'board2', 'board3', 'board4'];
    // --- get board list from database using service object

    let isLogin = getIsLogin();
    let userInfo;

    if( isLogin ) userInfo = getUserInfo();

    res.render('index', {boardList: boardList, isLogin: isLogin, userInfo: userInfo});
}