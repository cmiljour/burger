var connection = require("./connection.js");

var orm = {
  selectAll: function(displayBurgers) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [displayTable], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: function(burgerName, devoured) {
    var queryString = "insert into burgers set ?";
    connection.query(queryString, {burger_name: burgerName, devoured: devoured}, function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(whatToSelect) {
    var queryString = "";

    connection.query(queryString, , function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;