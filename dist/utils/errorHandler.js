export class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
export const errorHandler = (res, error) => {
    res.status(error.status || 500).json({
        message: error.message || "An unexpected error occurred",
        status: error.status || 500
    });
};
