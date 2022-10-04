const mongoose = require("mongoose");
const timeDateSchema = new mongoose.Schema({
  hour: { type: Number, required: true },
  min: { type: Number, required: true },
  sec: { type: Number, required: true },
  ampm: { type: String, required: true },
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});
const TimeDate = mongoose.model("TimeDate", timeDateSchema);
module.exports = TimeDate;
