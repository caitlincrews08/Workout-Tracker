const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },
  distance: {
    type: Number,
    required: "Enter a distance"
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;