import express from "express";
import CategoryController from "../controller/CategoryController.js";


const router =express.Router()
router.post("/create",CategoryController.createcategoty)
export default router