import jwt from "jsonwebtoken";
import { decode } from "jsonwebtoken";
import User from "../model/UserModel.js";
export function VerifyAccess(passRoles) {
  return async (req, res, next) => {
    const token = req.headers["auth-token"];
    console.log(token)

    if (!token) {
      return res.status(404).json({ message: "No token provided" });
    }

    try {
      const Decodbtoken = Decodbtoken(token)
      console.log(Decodbtoken, Decodbtoken?.id)
      const User = await User.findById(Decodbtoken?.id)
      if (!User) {
        return res.status(401).json({ status: 401, message: "unouthentcated" })
      } else {
        if (!passRoles.includes(User.lore)) {
          return res.status(403).json({ statu: 403, message: "unauthorized" })
        } else {
          req.User = User
          return next()

        }


      }
      const token = jwt.verify({ User: User }, process.env.SECRET_KEY, { expiresIn: "1d" })
      req.user = VerifyToken.user;

      if (!passRoles.includes(VerifyToken.user.role)) {
        return res.status(401).json({ message: "You don't have access" });
      }

      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Invalid token or expired token" });
      } else {
        return res.status(500).json({ message: `Error is ${error.message}` });
      }
    }
  };
}
