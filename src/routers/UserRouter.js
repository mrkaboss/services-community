import express from "express";
import Controller from "../controller/UserController.js";
import emailexist from "../middleware/Validation.js";
import { VerifyAccess } from "../middleware/VerifyAccess.js";
import routeBodyValidation from "../middleware/routeBodyValidation.js";
import { signupSchema, signinSchema } from "../validation/validation.js";

const router = express.Router();

router.post(
  "/signup",
  routeBodyValidation(signupSchema),
  emailexist,
  Controller.signup
);

router.post(
  "/login",
  routeBodyValidation(signinSchema),
  Controller.login
)

router.get(
  "/users",
  VerifyAccess("admin"),
  Controller.getallUser
);

router.get(
  "/users/:id",
  VerifyAccess("admin"),
  Controller.getOneUser
);

router.patch(
  "/updateUser",
  VerifyAccess("admin"),
  Controller.updateUser
);

export default router;
