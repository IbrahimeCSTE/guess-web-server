const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  title: { type: String, required: true },
  des1: { type: String, required: true },
  des2: { type: String, required: true },
  catagory: { type: String, required: true },
});
const News = mongoose.model("news", newsSchema);
module.exports = News;
