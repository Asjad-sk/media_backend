import mongoose, { Schema, Document } from "mongoose";

// Define the mapping of categories to subcategories
const categorySubcategoryMap: { [key: string]: string[] } = {
    Skills: ['Web', 'AI', 'Machine Learning', 'Data Science'],
    Business: ['Stock Market', 'Financial Analysis', 'Budget', 'Startup', 'Investment'],
    Entertainment: ['Movies', 'Music', 'Gaming', 'Books'],
    Education: ['Online Learning', 'Courses', 'Tutorials'],
    Engineering: ['Software Engineering', 'Electrical Engineering', 'Mechanical Engineering']
};

// Interface for the blog document
interface IBlog extends Document {
    Category: string;
    Subcategory: string[];
    title: string;
    description: string;
    PhotoUrl?: string;
    Author?: string;
    tags?: string[];
    publishedAt?: Date;
    views?: number;
    likes?: number;
    comments?: mongoose.Schema.Types.ObjectId[];
}

// Define the blog schema
const blogSchema = new Schema({
    Category: {
        type: String,
        enum: ['Skills', 'Business', 'Entertainment', 'Education', 'Engineering', 'All'],
        required: true   
    },
    Subcategory: {
        type: [String], // Change the type to an array of strings
    },
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    PhotoUrl: String, // It's optional by default, no need to specify
    Author: String, // It's optional by default, no need to specify
    tags: [String], // It's optional by default, no need to specify
    publishedAt: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// Set the available subcategories based on the selected category
blogSchema.path('Category').validate(function(value: string) {
    if (this.Subcategory) {
        this.Subcategory = categorySubcategoryMap[value] ?? [];
    }
    return true;
}, 'Invalid category');

const Blog = mongoose.model<IBlog>("Blog", blogSchema);
export default Blog;
