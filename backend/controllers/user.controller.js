const { asyncHandler } = require("../utils/asyncHandler");

const registerUser= asyncHandler(async (req,res) =>{
    res.status(200).json({success:true,message:"User Registered Successfully!"});
});

module.exports={registerUser};