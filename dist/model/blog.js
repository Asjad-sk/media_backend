import mongoose, { Schema } from "mongoose";
// Define the mapping of categories to subcategories
const categorySubcategoryMap = {
    Skills: ['Web', 'AI', 'Machine Learning', 'Data Science'],
    Business: ['Stock Market', 'Financial Analysis', 'Budget', 'Startup', 'Investment'],
    Entertainment: ['Movies', 'Music', 'Gaming', 'Books'],
    Education: ['Online Learning', 'Courses', 'Tutorials'],
    Engineering: ['Software Engineering', 'Electrical Engineering', 'Mechanical Engineering']
};
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
blogSchema.path('Category').validate(function (value) {
    var _a;
    if (this.Subcategory) {
        this.Subcategory = (_a = categorySubcategoryMap[value]) !== null && _a !== void 0 ? _a : [];
    }
    return true;
}, 'Invalid category');
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
