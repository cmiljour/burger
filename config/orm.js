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
  insertOne: function(burgerName, devoured, cb) {
    var queryString = "insert into burgers set ?";
    connection.query(queryString, {burger_name: burgerName, devoured: devoured}, function(err, result) {
      cb(result);
    });
  },
  updateOne: function(whatToSelect) {
    var queryString = "";

    connection.query(queryString, function(err, result) {
      
    });
  }
};

module.exports = orm;