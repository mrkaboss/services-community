import User from "../model/UserModel.js";
import Category from "../model/Category.js";
import Services from "../model/servicesModel.js";
import { sendEmail } from "../utils/sendEmail.js";

class ServiceController {
  static createService = async (req, res) => {
    try {
      const { title, description, categorys, price } = req.body;
      const category = await Category.findById(categorys);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      const userId = req.user?._id;
      if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
      }

      const service = await Services.findOne({ title });
      if (service) {
        return res.status(403).json({ messgae: 'Service already exist' });
      }

      let newService = await Services.create({
        title,
        description,
        categorys,
        price,
        provider: userId,
      });

      newService = await newService.populate([
        { path: 'categorys', select: 'categoryName' },
        { path: 'provider', select: 'names email' },
      ]);

      const users = await User.find();
      if (!users) {
        return res
          .status(404)
          .json({ status: 404, message: 'users not found' });
      }
      users.map(async (user) => {
        await sendEmail({
          receiverEmail: user.email,
          title: req.body.title,
          serviceDescription: req.body.description,
        });
      });

      return res.status(201).json({
        message: 'Service successfully created',
        newService,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static findServices = async (req, res) => {
    try {
      const services = await Services.find()
        .populate("categorys", "categoryName")
        .populate("provider", "names email");

      if (!services.length) {
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
