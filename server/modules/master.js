/**
 * Created by Dave on 9/23/15.
 */
var getName = require("./modules/name");
var getSkill = require("./modules/skill");
var getScrum = require("./modules/scrum");

var employeeArray= [];

var makeEmployee = function(){
    var employee = [(getName(), getSkill(), getScrum())];
    return employee;
}

var createEmployeeArray = function(){
    var firstEmployee = makeEmployee();

    if(firstEmployee[1] != "Front End"){
        makeEmployee()
    }




}