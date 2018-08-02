const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Schedule
      .find(req.query)
      .sort({ start: +1 })
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Schedule
      .findById(req.params.id)
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const schema = {
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        dueDateClass: req.body.dueDateClass,
        start:req.body.start,
        end:req.body.end,
        calendar:req.body.calendar
    };
    db.Schema
      .create(schema)
      .then(dbSchema => res.json(dbSchema))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Schema
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbSchema => res.json(dbSchema))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Schema
      .findById({ id: req.params.id })
      .then(dbSchema => dbSchema.remove())
      .then(dbSchema => res.json(dbSchema))
      .catch(err => res.status(422).json(err));
  }
};
