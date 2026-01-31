import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/jwtUtils.js";

class Controller {
  static signup = async (req, res) => {
    try {
      const { names, email, password, role } = req.body;

      const hashpassword = bcrypt.hashSync(password, 10);

      const newUser = await User.create({
        names,
        email,
        password: hashpassword,
        role,
      });

      return res.status(201).json({
        message: "User successfully created",
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "Invalid email or password" });
      }else{

      const comparepassword = bcrypt.compareSync(password, user.password);

      if (!comparepassword) {
        return res.status(404).json({ message: "Invalid password or email" });
      }
      const token = generateToken(user._id);

       return res.status(200).json({
        message: "Login successfully",
        token,
      });
    }


    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getallUser =async (req,res)=>{
    const user = await User.find()
    if(!user){
      return res.status(404).json({message:"User not found"})
    }else{
      return res.status(200).json({message:"User successfully ",user})
    }
  };
  static updateUser = async (req,res)=>{
    const id = req.params.id
     const User =await User.findByIdUpdate(id,req.body,{new:true})
     if(!User){
      return res.status(404).json({message:"User not found"})
     }else{
      return res.status(200).json({message:"User successfully update",User})
     }
  }
  static getOneUser =async (req,res)=>{
    const id = await User.rep.params.id
    const User = await User.findById()
    if(!User){
      return res.status(404).json({message:"User not found"})
    }else{
     return res.status(200).json({message:"User successfully retreved",User}) 
    }
    
  }
  static delete =async (req,res)=>{
    const User =await User.deletemany()
    if(!User){
      return res.status(404).json({message:"User not found"})
    }else{
      const token = generaToken(User?.id)
      return res.status(500).json({message:"User successfully delete",User})
    }
  }
}

export default Controller;
