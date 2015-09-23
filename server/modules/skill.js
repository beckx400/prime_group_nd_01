/**
 * Created by Dave on 9/23/15.
 */
var skillArray = ["Front End", "Clientside Logic", "Serverside Logic"];

var getSkill = function(){
    var randomNum = randomSkillNumber();
    return skillArray[randomNum];
}

function randomSkillNumber(){
    return Math.floor(Math.random() * (2 + 1));
}

module.exports = getSkill;