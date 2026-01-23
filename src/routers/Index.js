 import express from "express";
 import userRouter from "./UserRouter.js"
 import ServiceRouter from "./ServiceRouter.js"
 
 import categoryRouter from "./CategoryRouter.js"
 import BookingRouter from "./BookingRouter.js"
 

 const router = express.Router()
router.use("/User",userRouter)
router.use("/category",categoryRouter)
router.use("/service",ServiceRouter)
router.use("/Booking",BookingRouter)
 export default router