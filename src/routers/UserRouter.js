import express from "express";
import Controller from "../controller/UserController.js";
import emailexist from "../middleware/Validation.js";
import { VerifyAccess } from "../middleware/VerifyAccess.js";

const router = express.Router();

router.post("/signup", emailexist, Controller.signup);
router.post("/login", Controller.login);
router.post("/users",VerifyAccess('admin'),Controller.getallUser)
router.get("/getOneUser",VerifyAccess('User'),Controller.getOneUser)
router.patch("/updateUser",Controller.updateUser);
export default router;
