var connection = require("./connection.js");

var orm = {
  selectAll: function(displayTable, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [displayTable], function(err, result) {
      if (err) {throw err;
      }
      cb(result);
    });
  },
  insertRow: function(burgerName) {
    var queryString = "insert into burgers set ?";
    connection.query(queryString, {burger_name: burgerName, devoured: 0});
  },
  devourToTrue: function(id) {
    var queryString = `UPDATE burgers SET devoured = TRUE WHERE id = ${id}`;
    connection.query(queryString, function(err, result) {});
  }
};

module.exports = orm;