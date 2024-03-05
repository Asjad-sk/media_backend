import Blog from "../model/blog.js";
import { Response,Request } from "express";
import { CustomError, errorHandler } from "../utils/errorHandler.js";

export const createBlog = async(req:Request,res:Response) => { 

    try {
    
    // destructure blog model

    const {Category,Subcategory,title,description,PhotoUrl,Author} = req.body

    // error handling for blog model
    
    if(!Category && !title && !description){
        const customError = new CustomError("all fields are mandatory",404);
        errorHandler(res,customError);


        
    }

    // save blog model to database

    const newBlog = {
        Category,
        Subcategory,
        title,
        description,
        PhotoUrl,
        Author
    }

    await Blog.create(newBlog);
    res.status(200).json({
        message:"new blog created successfully",
        newBlog


    })
        
    } catch (error) {

        const customError = new CustomError("internal server error",500);
        errorHandler(res,customError);
        console.log(error)
    }


 }