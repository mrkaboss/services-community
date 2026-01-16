import express from "express";
import Controller from "../controller/UserController.js";
import emailexist from "../middleware/Validation.js";

const router = express.Router();

router.post("/signup", emailexist, Controller.signup);
router.post("/login", Controller.login);

export default router;
