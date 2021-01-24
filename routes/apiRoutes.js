const router = require("express").Router();
const Workout = require("../models/workout.js");

// gets all workouts from db api
// router.get("/workouts", (req,res) => {
//   Workout.find({})
//     .then((data) => {
//       res.json(data)
//     }).catch((err) => res.status(400).json(err.message));
// });

router.get("/workouts", (req,res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        }
      }
    }
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout)
    }).catch((err) => res.status(400).json(err.message));
});


// posts a new workout to db
router.post("/workouts", (req, res) => {
  //console.log(req.body);

  Workout.create({})
  .then((dbWorkout) => {
    res.json(dbWorkout)
    console.log(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err)
  });
});

router.put('/workouts/:id', ({body, params}, res) => {
  console.log(body);
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body }},
    {new: true, runValidators: true }
  )
  .then((dbWorkout) => {
    res.json(dbWorkout)
    console.log(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err)
  });
});

module.exports = router;