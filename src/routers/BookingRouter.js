import express from "express";
import BookingServicesController from "../controller/BookingController.js";
import { VerifyAccess } from "../middleware/VerifyAccess.js";

const ruoter = express.Router()
ruoter.post("/Booking",VerifyAccess("client"),BookingServicesController.Booking)

export default ruoter