import express from "express";
import dotenv from "dotenv"
import  Mongoose  from "mongoose";

dotenv.config()

const app = express()
const port = process.env.PORT
const db = process.env.DATABESE
app. listen (port,()=>{
    console.log(`server running on ${port}`)
})

Mongoose.connect(db).then(()=>{console.log("DATABESE connected sucussefuly")})
.catch((error)=>{console.log(`error is ${error}`)})
