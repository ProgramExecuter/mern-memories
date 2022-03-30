import express from "express";

const router = express.Router();

// GET route
router.get("/", (req, res) => {
  res.send("Posts Get Route");
});

export default router;
