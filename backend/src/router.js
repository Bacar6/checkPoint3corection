const express = require("express");

const { browse: getTiles } = require("./controllers/tilesControllers");
const { read: getboats, move } = require("./controllers/boatsControllers");
const { tilesExists } = require("./services/tilesExists");

const router = express.Router();

router.get("/tiles", getTiles);

router.get("/boats", getboats);
router.put("/boats/:id", tilesExists, move);

module.exports = router;
