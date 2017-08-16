var connection = require("./connection.js");

var orm = {
  selectAll: function(displayTable,cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [displayTable], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      
    });
  },
  insertRow: function(burgerName, cb) {
    var queryString = "insert into burgers set ?";
    connection.query(queryString, {burger_name: burgerName, devoured: 0}, function(err, result) {
      cb(result);
    });
  },
  devourToTrue: function(id, cb) {
    var queryString = `UPDATE burgers SET devoured = TRUE WHERE id = ${id}`;
    connection.query(queryString, function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;