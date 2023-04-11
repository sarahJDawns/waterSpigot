const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");
// const Comment = require("../models/Comment");

router.post("/createComment/:id", commentsController.createComment);

router.delete("/deleteComment/:id", commentsController.deleteComment);

// router.get("/", async (req, res) => {
//   try {
//     const comments = await Comment.find().populate("user").populate("userName");
//     res.render("index", { posts, comments });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
