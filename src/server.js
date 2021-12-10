
import express from "express";
// const express = require("express");
const PORT = 4000;


// 서버를 만들고
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware =(req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("통과되신 분이시군요. 지나가세요.")
    next();
}

// 햄버거처럼.. 서버의 내용물을 채운다.
const handleHome = (req, res, next) => {
    return res.end();
}

const handleLogin = (req,res) => {
    return res.send("Login here")
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge")
}
   
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected)


// 서버를 듣고
const handelListening = (req, res) => console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(4000, handelListening); 