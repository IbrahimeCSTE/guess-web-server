const mongoose = require("mongoose");
const winnerDetailsSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  winnerNo: { type: String, required: true },
  prize: { type: String, required: true },
});
const WinnerDetails = mongoose.model("winnerdetails", winnerDetailsSchema);
module.exports = WinnerDetails;
