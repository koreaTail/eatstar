
import express from "express";
// const express = require("express");
const PORT = 4000;


// 서버를 만들고
const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log("Im in the middle!");
    next();
}


// 햄버거처럼.. 서버의 내용물을 채운다.
const handleHome = (req, res, next) => {
    return res.end();
}

const handleLogin = (req,res) => {
    return res.send("Login here")
}

app.get("/", gossipMiddleware, handleHome)
app.get("/login", handleLogin);


// 서버를 듣고
const handelListening = (req, res) => console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(4000, handelListening);