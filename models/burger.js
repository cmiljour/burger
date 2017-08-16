var orm = require("../config/orm.js");


var burgerAction = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    add: function(burgerName, cb) {
        orm.insertRow(burgerName, function(res){
            cb(res);
        });

    },
    devour: function(id, cb) {
        orm.devourToTrue(id, function(res){
            cb(res);
        });
    }
};

module.exports = burgerAction;