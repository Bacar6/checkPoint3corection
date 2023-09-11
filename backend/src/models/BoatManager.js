const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  // findByName(name) {
  //   const sql = `select * from ${this.table} where name = ?`;
  //   return this.connection.query(sql, [name]);
  // }
  findByName(name) {
    const sql = `select b.*, t.type, t.has_treasure
    from ${this.table} as b 
    join tile  as t
      on b.coord_x = t.coord_x
      and b.coord_y = t.coord_y
    where name = ?`;
    return this.connection.query(sql, [name]);
  }

  update(boat) {
    const sql = `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`;
    return this.connection.query(sql, [boat.coord_x, boat.coord_y, boat.id]);
  }
}

module.exports = BoatManager;
