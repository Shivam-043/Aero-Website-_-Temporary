const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(cookieParser());

app.use(
    cors({
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: "*",
    })
);

module.exports = { app };