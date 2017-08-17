var express = require("express");
var burgerAction = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
    burgerAction.all(function(data){
        var burgerTableList = {
            burgers: data
        };
        res.render("index", burgerTableList);
    });
});

router.put("/:id", function(req, res){
    var id = req.params.id;
    burgerAction.devour(id);
    res.redirect("/");

})

router.post("/", function(req, res){
    burgerAction.add(req.body.name);
    res.redirect("/");
   

})

module.exports = router;