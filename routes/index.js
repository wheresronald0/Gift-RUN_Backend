const express = require("express");
const app = express();
const router = express.Router();
const Run = require("../models/index.js");

//index
router.route("/").get(function(req, res, next) {
  Run.find(function(err, allRuns) {
    if (err) {
      console.log(err);
    } else {
      res.json(allRuns);
    }
  }).catch(next);
});

//create route
router.route("/new").post(function(req, res) {
  const run = new Run(req.body);
  run
    .save()
    .then(run => {
      res.json("run added!");
    })
    .catch(err => {
      res.status(400).send("something went wrong! Run was not added");
    });
});

//show route
router.route("/:id").get(function(req, res, next) {
  Run.findById(req.params.id, function(err, aRun) {
    if (err) {
      console.log(err);
    } else {
      res.json(aRun);
    }
  }).catch(next);
});

//edit route
router.route("/:id/edit").get(function(req, res, next) {
  Run.findById(req.params.id, function(err, aRun) {
    if (err) {
      console.log(err);
    } else {
      res.json(aRun);
    }
  }).catch(next);
});

//update route
router.route("/:id").put(function(req, res) {
  Run.findByIdAndUpdate(req.params.id, req.body, function(err, aRun) {
    if (err) {
      console.log(err);
    } else {
      res.json(aRun);
    }
  });
});

//Destroy route
router.route("/:id").delete(function(req, res) {
  Run.findByIdAndRemove(req.params.id, function(err, deleteRun) {
    if (err) {
      console.log(err);
    } else {
      res.json(deleteRun);
    }
  });
});

module.exports = router;
