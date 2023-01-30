import express from "express"
import {renderLoginPage, renderJoinPage, login, logout, joinSite} from "../Controller/userController.js"

const userRouter = express.Router();

// login
userRouter.route('/login').get(renderLoginPage).post(login);

// logout
userRouter.get('/logout', logout);

// join (create user)
userRouter.route('/join').get(renderJoinPage).post(joinSite);

export default userRouter;