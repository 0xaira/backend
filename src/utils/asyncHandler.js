const asyncHandler = (requestHandler) => {
       (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next)
        .catch((error) => {
            next(error);
        });
    };
}

export default asyncHandler;

// const asyncHandler = fn => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };