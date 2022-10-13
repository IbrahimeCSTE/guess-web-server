const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  commentId: { type: String, required: true },
  comment: { type: String, required: true },
});
const NewsComment = mongoose.model("comments", commentSchema);
module.exports = NewsComment;
