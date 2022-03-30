import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// GET route
router.get("/", getPosts);

// POST route
router.post("/", createPost);

export default router;
