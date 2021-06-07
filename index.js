import express, { urlencoded } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

const port = process.env.PORT;
const db = process.env.DB_URL;

// MiddleWares
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Database Setup
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Paired Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(() => {
  console.log(`App is running at port ${port}`);
});
