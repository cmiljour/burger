var orm = require("../config/orm.js");


var burgerAction = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insert: function(cb) {
        orm.insertOne("burgerName", devoured, function(res){
            cb(res);
        });

    }
    // orm.updateOne("");
};

module.exports = burgerAction;