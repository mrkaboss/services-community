import Category from "../model/Category.js";
import User from "../model/UserModel.js";

 const emailexist = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default emailexist
export const CategoryExist =async(req,res,next)=>{
  
  const category = await Category.findOne()
  if(category){
    return res.status(404).json({message:"Category already exist"})
  }else{
    next()
  }
}


