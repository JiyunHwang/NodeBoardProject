import express from "express"
import {listPost, insertPost, updatePost, viewPost, deletePost, searchBoard, postToBoard} from "../Controller/boardController.js"

const boardRouter = express.Router();

/* Route to rendering method */
// show lists of post of :boardId
boardRouter.get('/:boardId', listPost);

// insert new post to :boardId
// boardRouter.get('/:boardId/insert', insertPost);
boardRouter.route('/:boardId/insert').get(insertPost).post(postToBoard);

// update post :postId of :boardId
boardRouter.get('/:boardId/:postId/update', updatePost);

// view post :postId of :boardId
boardRouter.get('/:boardId/:postId/view', viewPost);

// delete post :postId of :boardId
boardRouter.get('/:boardId/:postId/delete', deletePost);

// search in :boardId
boardRouter.get('/:boardId/search', searchBoard);



export default boardRouter;