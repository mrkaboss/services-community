import service from "../model/Category.js";
import User from "../model/UserModel.js";
import Category from "../model/Category.js";

class ServiceController{
    static creatService = async (req,res)=>{
      const CategoryId = req.body.Categorys 
      const Category = await Category.findById({_id:CategoryId})
      if(!Category){
        return res.status(404).json({message:'Category not found'})
      }else{
        const UserId =req.User._id
        if(!UserId){
            return res.status(404).json({message:"User not found"})
        }else{
            const service = await ServiceController.create (req,body)
            if(!service){
                return res.status(404).json({message:'Service not created'})
            }else{
                return res.status(201).json({message:"Service successfuly created",service})
            }
        }
      }
    }
}
export default ServiceController