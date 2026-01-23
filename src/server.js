import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/Index.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1",router);

const port = process.env.PORT || 3000;
const db = process.env.DATABASE;

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
