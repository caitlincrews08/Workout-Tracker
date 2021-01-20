const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req,res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data)
    }).catch((err) => res.json(err.message));
});

module.exports = router;