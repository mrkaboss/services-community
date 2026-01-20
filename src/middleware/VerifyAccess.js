import jwt from "jsonwebtoken";

export function VerifyAccess(passRole) {
  return (req, res, next) => {
    const token = req.headers["auth-token"];

    if (!token) {
      return res.status(404).json({ message: "No token provided" });
    }

    try {
      const CREATE = "jhufzsbeuywuy4r";

      const VerifyToken = jwt.verify(token, CREATE);

      req.user = VerifyToken.user;

      if (passRole !== VerifyToken.user.role) {
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
