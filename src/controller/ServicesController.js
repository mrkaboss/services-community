import User from "../model/UserModel.js";
import Category from "../model/Category.js";
import services from "../model/ServicesModel.js"

class ServiceController {
  static createService = async (req, res) => {
    try {
      const { title, descrition, categoryId, price } = req.body;

      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const userId = req.User?._id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized user" });
      }

      let service = await services.create({
        title,
        descrition,
        category: category._id,
        price,
        provider: userId,
      });

      service = await service.populate([
        { path: "category", select: "categoryName" },
        { path: "provider", select: "names email" },
      ]);

      return res.status(201).json({
        message: "Service successfully created",
        service,
      });

    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    }
  };
  static findServices = async (req,res)=>{
    const Service = await Service.find()
    if(!Service){
     return res.status(404).json({message:"Service note found"})   
    }else{
        return res.status().json({message:"Service successfully retrivite",Service})
    }
  }
}

export default ServiceController;
