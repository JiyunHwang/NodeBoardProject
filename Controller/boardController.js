/* Get BoardService */
import {listBoardPostService, postToBoardService} from "../Service/boardService.js"

/* define board method */
// list posts of :boardId

/* Methods relate to render pages */
export const listPost = (req, res) => {
    // --- get data from database using service object
    let postData = [
        {display_no: 1, title: "hello, world", writer: 'Jiyun', date: '2022-01-23'},
        {display_no: 2, title: "I want some help, please", writer: 'Jiyun', date: '2021-07-09'},
        {display_no: 3, title: "Merry Christmas and Happy New Year", writer: 'Jiyun', date: '2020-12-24'},
        {display_no: 4, title: "my ottds", writer: 'Jiyun', date: '2020-09-03'},
        {display_no: 5, title: "I open my Blog! Welcome", writer: 'Jiyun', date: '2020-05-11'}
    ];
    // --- get data from database using service object
    return res.render("board_list", {boardName: req.params.boardId, postData: postData});
}

export const insertPost = (req, res) => {
    return res.render("board_write", {boardName: req.params.boardId});
}

export const updatePost = (req, res) => {
    return res.send("update");
}

export const viewPost = (req, res) => {
    return res.send("view");
}

export const deletePost = (req, res) => {
    return res.send("delete");
}

export const searchBoard = (req, res) => {
    return res.send("search");
}

/* Methods relate to crud data */
export const postToBoard = async (req, res) => {
    postToBoard(req.body);
    return res.send(req.body);
}