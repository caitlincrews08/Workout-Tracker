const router = require("express").Router();
const db = require("../models");

// gets all workouts from db api
router.get("/api/workouts", (req,res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data)
    }).catch((err) => res.json(err.message));
});

// posts a new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then((dbWorkout) => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err)
  });
});

module.exports = router;