import express from "express";
import { Request,Response } from "express";
import mongoose, { connect } from "mongoose";
import  dotenv from "dotenv";
import blogrouter from "./routers/blog.js";

const app =express();

// middlewares

app.use(express.json())

app.use("/api",blogrouter)


// -----db connection init------------

dotenv.config()

mongoose.connect(process.env.MONGOURI ?? '')
.then(() => { console.log("db connected") })
.catch((error) => { console.log(error) })


// -------db connection end-----------


app.use('/',(req:Request,res:Response)=>{
    res.send("hello world")
})


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})