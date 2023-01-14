import express from "express"
import {home} from "../Controller/rootController.js"

const globalRouter = express.Router();
globalRouter.get('/', home);


export default globalRouter;