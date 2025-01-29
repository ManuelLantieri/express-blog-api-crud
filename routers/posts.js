const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

const posts = [
  {
    id: 1,
    title: "Primo Post",
    content: "Contenuto del primo post",
    tags: ["tech", "news"],
  },
  {
    id: 2,
    title: "Secondo Post",
    content: "Contenuto del secondo post",
    tags: ["lifestyle"],
  },
  {
    id: 3,
    title: "Terzo Post",
    content: "Contenuto del terzo post",
    tags: ["tech"],
  },
];

module.exports = posts;

// Definizione delle rotte
router.get("/", postsController.getAllPosts); // Index
router.get("/:id", postsController.getPostById); // Show
router.post("/", postsController.createPost); // Create
router.put("/:id", postsController.updatePost); // Update
router.delete("/:id", postsController.deletePost); // Delete

module.exports = router;
