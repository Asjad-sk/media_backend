import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    createdAt:{
        type:Date,
        
    }

})

const user = mongoose.model("User",userSchema);
export default user;