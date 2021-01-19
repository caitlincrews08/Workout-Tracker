const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  sets: {
    type: Number,
    required: "Enter a number of sets"
  },
  reps: {
    type: Number,
    required: "Enter a number of reps"
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

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;