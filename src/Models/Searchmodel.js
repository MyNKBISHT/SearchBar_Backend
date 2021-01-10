const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
  title: {
    type: String
  },
  unit: {
    type: String
  },
  frequency: {
    type: String
  },
  source: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Search", searchSchema);
