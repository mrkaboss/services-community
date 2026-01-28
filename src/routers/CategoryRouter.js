import express from "express";
import CategoryController from "../controller/CategoryController.js";
import { CategoryExist } from "../middleware/Validation.js";


const router =express.Router()
router.post("/create",CategoryExist,CategoryController.createcategoty)
router.get("/",CategoryController.findAllCategory)
router.delete("/Category",CategoryController.delete)
export default router