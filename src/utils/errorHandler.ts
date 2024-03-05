import { Response } from "express";

export class CustomError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export const errorHandler = (res: Response, error: CustomError) => {
    res.status(error.status || 500).json({
        message: error.message || "An unexpected error occurred",
        status: error.status || 500
    });
};
