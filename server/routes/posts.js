import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);  // we want to grab only the selected user's posts

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);  // liking the post

export default router;