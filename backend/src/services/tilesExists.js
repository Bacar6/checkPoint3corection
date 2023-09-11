const models = require("../models");

const tilesExists = (req, res, next) => {
  models.tile
    .findByCoordinate(req.body)
    .then(([rows]) => {
      if (rows.length !== 0) {
        next();
      } else {
        res.sendStatus(422);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  tilesExists,
};
