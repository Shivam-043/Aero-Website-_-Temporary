const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => {
                next(error);
                // console.log('Error Handler Middleware', error);
                // if (!res.headersSent) {
                //     res.status(500).json({ message: 'Internal Server Error' });
                // }
            }
            );
    }
}

module.exports = { asyncHandler }