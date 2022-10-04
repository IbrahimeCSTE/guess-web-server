const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
});
const TeamList = mongoose.model("teamlist", teamSchema);
module.exports = TeamList;
