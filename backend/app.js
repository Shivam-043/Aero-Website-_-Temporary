const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const app = express();
app.use(
    cors({
        origin: ["http://127.0.0.1:5173","http://localhost:5173"],
        credentials: true,
        methods: "GET, POST, PUT, DELETE",
        // allowedHeaders: "*",
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'X-Custom-Header']
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
});


// import routes
const userRouter = require('./routes/user.routes.js');

// routes declaration
app.use("/api/users", userRouter);

module.exports = { app };