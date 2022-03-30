import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Import Routes
import postRoutes from "./routes/posts.js";

const app = express();

// .env Config
dotenv.config();

// Body-Parser Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Cross-Origin request handling
app.use(cors());

// Link Routes
app.use("/posts", postRoutes);

// PORT
const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
