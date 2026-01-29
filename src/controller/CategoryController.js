
import Category from "../model/Category.js"

class CategoryController{
    static createcategoty = async (req,res)=>{
      const categoryName=req.body
     const category = await Category.create(categoryName) 
     
     
     if(!category){
        return res.status(404).json({message:"Category not created"})
     } else{
        return res.status(200).json({message:"Category successfully",category})
     }
    }
    static findcategory = async (req,res)=>{
        const category =await Category.find(req,body)
        if(!Category){
            return res.status(404).json({message:"category no found"})
        }else{
            return res.status(200).json({message:"category successfully finded",category})
        }
    }
    static findAllCategory = async (req, res) => {
  try {
    const categories = await Category.find(); 

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    return res.status(200).json({
      message: "All categories fetched successfully",
      categories,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

   static delete =async (req,res)=>{
    const categories =await categories.deletemany()
    if(!categories){
      return res.status(404).json({message:"category not found"})
    }else{
      return res.status(200).json({message:"category successfully delete",categories})
    }
  }
}
export default CategoryController