
import express from "express";
import morgan from "morgan";

// const express = require("express");
const PORT = 4000;


// 서버를 만들고
const app = express();
const logger = morgan("dev")

// 햄버거처럼.. 서버의 내용물을 채운다.
const handleHome = (req, res, next) => {
    return res.end();
}
   
app.use(logger)
app.get("/", handleHome);


// 서버를 듣고
const handelListening = (req, res) => console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(4000, handelListening); 