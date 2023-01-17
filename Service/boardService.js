import {connection} from "../index.js";

export const listBoardPostService = (data) => {
    const sql = "SELECT * FROM board_post WHERE board_seq = ?";
    const params = [];
    params.push(data.boardSeq);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
    });
}

export const postToBoardService = (data) => {
    const sql = "INSERT INTO `board_post` (`board_seq`, `title`, `content`, `insert_user_seq`, `update_user_seq`, `delete_user_seq`) VALUES (1, ?, ?, 1, 1, 1)";
    const params = [];
    params.push(data.boardTitle);
    params.push(data.boardContent);
    connection.query(sql, params, (err, rows, fields) => {
        if(err) console.log(err);
    });
}