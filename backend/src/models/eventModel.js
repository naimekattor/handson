const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  date: String,
  time: String,
  location: String,
  attendees: Number,
  categoryColor: String,
});

module.exports = mongoose.model("Event", eventSchema);
