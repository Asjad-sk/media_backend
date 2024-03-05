var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Blog from "../model/blog.js";
import { CustomError, errorHandler } from "../utils/errorHandler.js";
export const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // destructure blog model
        const { Category, Subcategory, title, description, PhotoUrl, Author } = req.body;
        // error handling for blog model
        if (!Category && !title && !description) {
            const customError = new CustomError("all fields are mandatory", 404);
            errorHandler(res, customError);
        }
        // save blog model to database
        const newBlog = {
            Category,
            Subcategory,
            title,
            description,
            PhotoUrl,
            Author
        };
        yield Blog.create(newBlog);
        res.status(200).json({
            message: "new blog created successfully",
            newBlog
        });
    }
    catch (error) {
        const customError = new CustomError("internal server error", 500);
        errorHandler(res, customError);
        console.log(error);
    }
});
