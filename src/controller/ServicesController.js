import User from "../model/UserModel.js";
import Category from "../model/Category.js";
import Services from "../model/servicesModel.js";

class ServiceController {
  static createService = async (req, res) => {
    try {
      const { title, description, categorys, price } = req.body;

      const category = await Category.findById(categorys);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const userId = req.user?._id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized user" });
      }

      let service = await Services.create({
        title,
        description,
        categorys,
        price,
        provider: userId,
      }); 

      service = await service.populate([
        { path: "categorys", select: "categoryName" },
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
 static findServices = async (req, res) => {
  try {
    const services = await Services.find()
      .populate("categorys", "categoryName")
      .populate("provider", "names email");

    if (services.length === 0) {
      return res.status(404).json({ message: "No services found" });
    }

    return res.status(200).json({
      message: "Services successfully retrieved",
      services,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

}

export default ServiceController;
