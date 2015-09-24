var express = require('express');
var app = express();
var master = require("./modules/master");
var path = require("path");
var getName = require("./modules/name");
var getSkill = require("./modules/skill");
var getScrum = require("./modules/scrum");


app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.get('/master', function(req, res){
    res.send(master.skillEval());
});

app.get('/addemployee', function(req, res){
    res.send(master.makeEmployee());
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});