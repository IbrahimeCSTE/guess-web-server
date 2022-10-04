const mongoose = require("mongoose");
const dynamicTextSchema = new mongoose.Schema({
  text: { type: String, required: true },
});
const DynamicText = mongoose.model("dynamictext", dynamicTextSchema);
module.exports = DynamicText;
