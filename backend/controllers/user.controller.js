const { User } = require("../schema");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (e) {
        throw new ApiError(500, "Something went wrong in generating access and refresh token");
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // console.log("body : ",req.body);
    const { name, email, password, gender, mobile } = req.body;
    if (
        [name, email, password, gender, mobile].some((field) => (!field || field?.trim() === ""))
    ) {
        console.log("\nrequired field not received !!!!");
        throw new ApiError(400, "All fields are required");
    }
    console.log(email);

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        throw new ApiError(409, "Email already in use");
    }

    const user = await User.create({
        email, name, password, gender, mobile
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Server Error: Could not create the user")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully!")
    );
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("loging route ", email);
    if (!email || !password) {
        throw new ApiError(400, "Please provide an email and a password");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }
    const isMatch = await user.isCorrectPassword(password);
    if (!isMatch) {
        throw new ApiError(401, "Incorrect Password!");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        maxAge: 900000,
        httpOnly: true,
        // secure: true,
        // sameSite:'lax',
        // secure: process.env.NODE_ENV === 'production'
    }
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.status(200)
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options)
        .json(
            new ApiResponse(201, {
                user: loggedUser, accessToken, refreshToken
            }, 'Logged in successfully')
        )

});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }, { new: true }
    );
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie('accessToken', options)
        .clearCookie('refreshToken', options)
        .json(
            new ApiResponse(200, {}, "User Successfully Logged Out")
        )
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(403, "No token provided");
    };

    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id);

    if (!user) {
        throw new ApiError(401, "Invalid refresh Token");
    }
    if (incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(400, "Refresh token is  stale. Please login again.");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 600000,
    }

    res.status(200)
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options)
        .json(
            new ApiResponse(201, {
                accessToken, refreshToken
            }, 'Access token refreshed')
        );

})

const updateDetails = asyncHandler(async (req, res) => {
    const { address, college_name, name, gender, mobile } = req.body;

    // Check if at least one field is provided for update
    if (![address, college_name, name, gender, mobile].some(field => field !== undefined && field.trim() !== "")) {
        throw new ApiError(400, "Please provide at least one detail to update");
    }

    const updateFields = {};

    const fieldsToUpdate = ['address', 'college_name', 'name', 'gender', 'mobile'];

    for (const field of fieldsToUpdate) {
        if (req.body[field]?.trim() !== "") {
            updateFields[field] = req.body[field];
        }
    }
    console.log(updateFields);
    const user = await User.findByIdAndUpdate(req.user._id, updateFields, { new: true }).select(["-password", "-resetPasswordToken"]);

    res.status(200).json(new ApiResponse(200, user, "User Details Updated Successfully"));
});

module.exports = { registerUser, loginUser, logoutUser, refreshAccessToken, updateDetails };