import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

// .env Config
dotenv.config();

// Body-Parser Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Cross-Origin request handling
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

///
// Server Listening
///
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
