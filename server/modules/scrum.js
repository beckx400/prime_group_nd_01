/**
 * Created by Dave on 9/23/15.
 */
var getScrum = function(){
    var randomPts = Math.floor(Math.random() * (9)+ 1);
    return randomPts.toString();
};

module.exports = getScrum;