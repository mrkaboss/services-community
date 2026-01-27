import mongoose, { Types } from "mongoose";
import Category from "./Category.js";
import { populate } from "dotenv";
const servicesSchama = new mongoose.Schema({
title:{
    type:String,
    required:[true,'please title is required']
},
description:{
type:String,
required:[true,'please description']
},
categorys:{
   type:mongoose.Schema.Types.ObjectId,
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
        path:"categorys",select:"CategoryName"
    }).populate({
        path: "provider",select:"names email"
    })
})
const Services = mongoose.model("Services",servicesSchama)
export default Services