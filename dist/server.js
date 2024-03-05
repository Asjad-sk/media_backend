var _a;
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogrouter from "./routers/blog.js";
const app = express();
// middlewares
app.use(express.json());
app.use("/api", blogrouter);
// -----db connection init------------
dotenv.config();
mongoose.connect((_a = process.env.MONGOURI) !== null && _a !== void 0 ? _a : '')
    .then(() => { console.log("db connected"); })
    .catch((error) => { console.log(error); });
// -------db connection end-----------
app.use('/', (req, res) => {
    res.send("hello world");
});
app.listen(4000, () => {
    console.log("server is running on port 4000");
});
