import mongoose, { Types } from "mongoose";
import Category from "./Category";
import { populate } from "dotenv";
const servicesSchama =mongoose.Schema({
title:{
    type:String,
    required:[true,'please title is required']
},
description:{
type:String,
required:[true,'please description']
},
Category:{
   type:mongoose.Schema,Types,ObjectId,
   ref:"Category" 
},
price:{
    type:Number,
    required:[true,'please price is required']
},
provider:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
createdAt:{
    type:Date,
    default:new Date (Date.now())
}
})
servicesSchama.pre(/^find/,function(next){
    this.populate({
        path:"Category",select:"CategoryName"
    }).populate({
        path: "provider",select:"names email"
    })
    next()
})