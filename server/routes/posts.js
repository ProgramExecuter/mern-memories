import express from "express";

import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// GET route
router.get("/", getPosts);

export default router;
