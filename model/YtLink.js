const mongoose = require("mongoose");
const ytSchema = new mongoose.Schema({
  ytLink: { type: String, required: true },
});
const YoutubeLink = mongoose.model("Youtube", ytSchema);
module.exports = YoutubeLink;
