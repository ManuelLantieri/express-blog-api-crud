const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

// Index route
router.get("/", getAllPosts);

// Show route
router.get("/:id", getPostById);

// Create route
router.post("/", createPost);

// Update route
router.put("/:id", updatePost);

// Delete route
router.delete("/:id", deletePost);

module.exports = router;

