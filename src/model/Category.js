import mongoose from "mongoose";

const CategorySchema =new mongoose.Schema({
    categoryName:{
        type:String,
        required:['Category name is needed']
    },
    Createdat:{
        type:Date,
        default:new Date(Date.now())
    }
})
const Category =mongoose.model("Category" ,CategorySchema)
export default Category