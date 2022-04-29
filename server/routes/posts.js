import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

// GET route
router.get("/", getPosts);

// POST route
router.post("/", createPost);

// PATCH route
router.patch("/:id", updatePost);

export default router;
