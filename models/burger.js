var orm = require("../config/orm.js");


var burgerAction = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
});
    },

    add: function(burgerName) {
        orm.insertRow(burgerName);

    },
    devour: function(id) {
        orm.devourToTrue(id);
    }
};

module.exports = burgerAction;