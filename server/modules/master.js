/**
 * Created by Dave on 9/23/15.
 */
var getName = require("./name");
var getSkill = require("./skill");
var getScrum = require("./scrum");

var makeEmployee = function(){
    var employee = [getName(), getSkill(), getScrum()];
    console.log(employee);
    return employee;
}


var skillEval = function() {

    var employeeArray= [];
    var frontEnd = 0;
    var cliSideLog = 0;
    var serSideLog = 0;

        while((frontEnd == 0) || (cliSideLog == 0) || (serSideLog == 0)) {
            var employee = [getName(), getSkill(), getScrum()];
            if (employee[1] == "Front End") {
                frontEnd += 1;
                employeeArray.push(employee);
            } else if
            (employee[1] == "Clientside Logic") {
                cliSideLog += 1;
                employeeArray.push(employee);
            } else if(employee[1] == "Serverside Logic") {
                serSideLog += 1;
                employeeArray.push(employee);
            }
        }

        return employeeArray;
};



exports.skillEval = skillEval;
exports.makeEmployee = makeEmployee;