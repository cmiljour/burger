var express = require("express");
var burgerAction = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
    burgerAction.all(function(burgerTableList){
        res.render("index", burgerTableList);
    });
    
});

router.post("")

module.exports = router;