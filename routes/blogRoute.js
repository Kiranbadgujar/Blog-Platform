import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addComment,
} from "../controllers/blogControllers.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.get("/getblog",getAllBlogs);

router.post("/createBlog",authMiddleware, createBlog);

router.put("/updateBlog/:id",authMiddleware, updateBlog);

router.delete("/deleteBlog/:id",authMiddleware, deleteBlog);

// router
//   .route("/:id")
//   .put(authMiddleware, updateBlog)
//   .delete(authMiddleware, deleteBlog);

router.post("/:id/comments", addComment);

export default router;
