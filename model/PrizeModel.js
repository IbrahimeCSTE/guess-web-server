const mongoose = require("mongoose");
const prizeSchema = new mongoose.Schema({
  imgLink: { type: String, required: true },
  winnerNo: { type: String, required: true },
  prize: { type: String, required: true },
});
const WinnerPrize = mongoose.model("Prizes", prizeSchema);
module.exports = WinnerPrize;
