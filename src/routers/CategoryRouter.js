import express from "express";
import CategoryController from "../controller/CategoryController.js";


const router =express.Router()
router.post("/create",CategoryController.createcategoty)
router.get("/",CategoryController.findAllCategory)
export default router