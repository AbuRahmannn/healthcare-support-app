const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  name: String,
  phone: String,
  city: String,
  type: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Support", supportSchema);
