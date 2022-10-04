const mongoose = require("mongoose");
const updateSchema = new mongoose.Schema({
  updateNews: { type: String, required: true },
});
const UpdateNews = mongoose.model("Updatenews", updateSchema);
module.exports = UpdateNews;
