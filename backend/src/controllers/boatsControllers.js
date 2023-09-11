const models = require("../models");

const browse = async (req, res) => {
  try {
    const [rows] = await models.boat.findAll();
    res.send(rows);
  } catch (error) {
    res.sendStatus(500);
  }
};

const read = (req, res) => {
  const boatName = req.query.name;
  models.boat
    .findByName(boatName)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const move = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const boat = { id, ...req.body };
  models.boat
    .update(boat)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  move,
};
