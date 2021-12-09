// 서버를 만들고
import express from "express";
// const express = require("express");
const PORT = 4000;
const app = express();


// 햄버거처럼.. 서버의 내용물을 채운다.
app.get("/", () => console.log("Somebody is trying to go home"));



// 서버를 듣고
const handelListening = (req, res) => console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(4000, handelListening);