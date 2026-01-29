import express from "express";
import BookingServicesController from "../controller/BookingController.js";
import { VerifyAccess } from "../middleware/VerifyAccess.js";

const ruoter = express.Router()
ruoter.post("/create",VerifyAccess("client","admin"),BookingServicesController.Booking)
ruoter.put("/status/:id",VerifyAccess("provider","admin"),BookingServicesController.chengeStatus)
ruoter.get("/AllBooking",VerifyAccess("provider","admin"),BookingServicesController.getAllBooking)
export default ruoter