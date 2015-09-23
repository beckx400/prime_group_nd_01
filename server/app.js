var express = require('express');
var app = express();
var master = require("./modules/master")
//var getName = require("./modules/name");
//var getSkill = require("./modules/skill");
//var getScrum = require("./modules/scrum");

app.get('/', function(req, res){
    res.write(getName());
    res.write(getSkill());
    res.write(getScrum());
    res.end();
})

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});