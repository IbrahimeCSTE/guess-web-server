const mongoose = require("mongoose");
const fbSchema = new mongoose.Schema({
  fbLink: { type: String, required: true },
});
const FacebookLink = mongoose.model("Facebook", fbSchema);
module.exports = FacebookLink;
