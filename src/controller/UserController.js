import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "Invalid email" });
      }

      const comparepassword = bcrypt.compareSync(password, user.password);

      if (!comparepassword) {
        return res.status(404).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        message: "Login successfully",
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default Controller;
