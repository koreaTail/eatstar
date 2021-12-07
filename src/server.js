
import express from "express";
// const express = require("express");
const app = express();

const handelListening = () => console.log("Server listenting on port 4000 🚀")

app.listen(4000, handelListening);