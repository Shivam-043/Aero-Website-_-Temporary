const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    gender:{
        type: String,
        enum: ['male', 'female','none'],
        default :"male",
    },
    mobile :{
        type :String,
        trim: true,
    },
    college_name:{
        type: String,
        trim: true,
    },
    address:{
        country: String,
        state:String,
        city:String,
    },
}, { timestamps: true });

 const User = mongoose.model("User", userSchema);

module.exports = User;