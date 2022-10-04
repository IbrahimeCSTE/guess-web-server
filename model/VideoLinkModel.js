const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
  videoLink: { type: String, required: true },
});
const VideoLink = mongoose.model("videos", videoSchema);
module.exports = VideoLink;
