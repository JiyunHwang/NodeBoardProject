import express from "express"
import {login, logout, joinSite} from "../Controller/userController.js"

const userRouter = express.Router();

// login
userRouter.get('/user/login', login);

// logout
userRouter.get('/user/logout', logout);

// join (create user)
userRouter.get('/user/join', joinSite);

export default userRouter;