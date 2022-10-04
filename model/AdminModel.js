const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  admin: { type: Boolean, default: false },
});
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
