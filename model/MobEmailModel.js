const mongoose = require("mongoose");
const meSchema = new mongoose.Schema({
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
});
const MobileEmail = mongoose.model("MobEmail", meSchema);
module.exports = MobileEmail;
