import express from "express"
import {renderListPost, renderInsertPost, renderUpdatePost, renderViewPost, deletePost, searchBoard, listPost, viewPost, insertPost, updatePost} from "../Controller/boardController.js"

const boardRouter = express.Router();

/* Route to rendering method */
// show lists of post of :boardId
boardRouter.route('/:boardId').get(listPost, renderListPost);

// insert new post to :boardId
boardRouter.route('/:boardId/insert').get(renderInsertPost).post(insertPost);

// update post :postId of :boardId
boardRouter.route('/:boardId/:postId/update').get(renderUpdatePost).post(updatePost);

// view post :postId of :boardId
boardRouter.route('/:boardId/view/:postId').get(viewPost, renderViewPost);

// delete post :postId of :boardId
boardRouter.get('/:boardId/:postId/delete', deletePost);

// search in :boardId
boardRouter.route('/:boardId/search').get(searchBoard, renderListPost);



export default boardRouter;