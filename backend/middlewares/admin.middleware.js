const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");

const verifyAdmin = asyncHandler(async (req, res, next) => {
    if (!req.user || req.user.role !='admin') {
        throw new ApiError(401, "Unauthorized: Admin access required.");
    }
    next();
})

module.exports = { verifyAdmin };