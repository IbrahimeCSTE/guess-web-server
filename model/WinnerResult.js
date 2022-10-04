const mongoose = require("mongoose");
const winnerResultSchema = new mongoose.Schema({
  winnerIdx: { type: String, require: true },
});
const WinnerResult = mongoose.model("winnerresults", winnerResultSchema);
module.exports = WinnerResult;
