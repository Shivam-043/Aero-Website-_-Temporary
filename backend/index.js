require('dotenv').config();
const { default: mongoose } = require("mongoose");
const { DB_NAME } = require("./constants");
const { connectDB } = require("./db/index.js");
const { app } = require('./app.js');
const port = process.env.PORT || 3000;


connectDB()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}/`);
    });
})
.catch((err) => console.log("MongoDB connection Failed !!! ",err));