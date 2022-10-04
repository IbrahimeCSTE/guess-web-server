const mongoose = require("mongoose");
const hederImgSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
});
const HeaderImg = mongoose.model("headerimg", hederImgSchema);
module.exports = HeaderImg;
