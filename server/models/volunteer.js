const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  skill: String,
  availability: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
