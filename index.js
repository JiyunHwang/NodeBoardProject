// get modules
// const http = require('http');
// const express = require('express');
import express from "express"
import http from "http"
import ejs from "ejs"
import globalRouter from "./Router/globalRouter.js"
import userRouter from "./Router/userRouter.js"
import boardRouter from "./Router/boardRouter.js"

// create objects for setting
const app = express();
const server = http.createServer();
const hostname = "127.0.0.1";
const port = 3000;

// setting view
app.set('view engine', 'ejs');
app.set('views', './views');

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