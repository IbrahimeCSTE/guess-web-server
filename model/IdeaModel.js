const mongoose = require("mongoose");
const ideaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  zila: { type: String, required: true },
  code: { type: String, required: true },
  team: { type: String, required: true },
});
const Idea = mongoose.model("idea", ideaSchema);
module.exports = Idea;
