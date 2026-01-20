
import Category from "../model/Category.js"

class CategoryController{
    static createcategoty = async (req,res)=>{
     const category = await Category.create(req.body) 
     if(!category){
        return res.status(404).json({message:"Category not created"})
     } else{
        return res.status(500).json({message:"Category successfully",category})
     }
    }
    static findcategory = async (req,res)=>{
        const category =await Category.find(req,body)
        if(!Category){
            re
        }
    }
}
export default CategoryController