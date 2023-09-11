const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findByCoordinate(coords) {
    const sql = `select * from ${this.table} where coord_x = ? and coord_y = ? `;
    return this.connection.query(sql, [coords.coord_x, coords.coord_y]);
  }
}

module.exports = TileManager;
