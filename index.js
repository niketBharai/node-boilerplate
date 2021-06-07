import express, { urlencoded } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mongoose from "mongoose";

const port = process.env.PORT;
const db = process.env.DB_URL;

// MiddleWares
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

app.listen(() => {
  console.log(`App is running at port ${port}`);
});
