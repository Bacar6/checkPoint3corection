const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }
}

module.exports = TileManager;
