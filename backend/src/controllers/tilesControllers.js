const models = require("../models");

const browse = async (req, res) => {
  try {
    const [rows] = await models.tile.findAll();
    res.send(rows);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
};
