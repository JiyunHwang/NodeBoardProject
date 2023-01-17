// get modules
import http from 'http';
import express from 'express';
import ejs from 'ejs';
import mySql from 'mysql';
import dotenv from 'dotenv';
import config from './config.js';

// get Routers
import globalRouter from "./Router/globalRouter.js"
import userRouter from "./Router/userRouter.js"
import boardRouter from "./Router/boardRouter.js"

// bring environment variables
dotenv.config();

// create objects for setting
const app = express();
const server = http.createServer();
const hostname = "127.0.0.1";
const port = 3000;

// create connection to db
let connection = mySql.createConnection(config[process.env.NODE_ENV]);
connection.connect((err) => {
    if(err) throw err;
});

export connection;

// setting view
app.set('view engine', 'ejs');
app.set('views', './views');

// setting request data encode
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

// enroll routers
app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/board', boardRouter);

// server.listen(port, hostname, () => {
//     console.log("server running at http://${hostname}:${port}/");
// })

app.listen(port, () => {
    console.log(`running at port #${port}`);
})

// app.use((req, res, next) => {
//     res.status(404).send("Not Found Error");
// })
// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send(err.stack);
// })