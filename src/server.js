import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/Index.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DATABASE;

app.use(express.json());

app.use("/api/v1",router);

app.listen (port,()=>{
  console.log('server runing on ${port}')
})

mongoose
  .connect(db)
  .then(() => {
    console.log("DATABASE connected successfully");

    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database error:", error.message);
  });
  app.get ('', (req,res)=>{
   return res. status(200).json({status:200,message:"welcam to community-services"}) 
  })
  app.get('/',(req,res)=>{
   res.status(200).json({message:"Wellcome to our website"})
  })

  
