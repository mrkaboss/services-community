import express from "express";
import ServiceController from "../controller/ServicesController.js";
import { VerifyAccess } from "../middleware/VerifyAccess.js";

const router  = express.Router()

router.post ("/",VerifyAccess("provider"),ServiceController.createService)
router.get("/all",ServiceController.findServices)


export default router