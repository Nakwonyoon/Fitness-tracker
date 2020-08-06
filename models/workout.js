const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: { type: Date, 
    default: Date.now },
exercises: {
  type:{
       type: String,
       trim : true,
       required : "What kind of excercise"  
    },
  name: {
    type: String,
    trim: true,
    required: "Enter name"
  },
  duration: {
    type: Number,
    required: "How long ?"
  },
  weight: {
    type: Number,
    required: "Enter your weight"
  },
  sets: {
    type: Number,
    required : "Entere sets"
  },
  reps: {
      type: Number,
      required: "How many sets?"
  }
}
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
