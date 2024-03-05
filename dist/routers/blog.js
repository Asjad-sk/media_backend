import express from "express";
import { createBlog } from "../controller/blog.js";
const router = express.Router();
router.post("/createblog", createBlog);
export default router;
