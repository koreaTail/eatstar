
import express from "express";
// const express = require("express");
const PORT = 4000;
const app = express();

const handelListening = () => console.log(`Server listenting on port http://localhost:${PORT} 🚀`)

app.listen(4000, handelListening);