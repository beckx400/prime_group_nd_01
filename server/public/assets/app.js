/**
 * Created by Dave on 9/24/15.
 */
$(document).ready(function(){
    var companyArray = ["Acme, inc.", "Widget Corp", "123 Warehousing", "Demo Company",
    "Smith and Co.", "Foo Bars", "ABC Telecom", "Fake Brothers", "Sample Company", "LexCorp",
    "Ziff CORP", "Wayne Enterprises", "Water and Power", "Thrift Bank"];
    var getCompany = function(){
        var company = Math.floor(Math.random() * (14));
        return companyArray[company];
    };

    function randomNumber(){
        var randomNumber = Math.floor(Math.random() * (51) + 10);
        return randomNumber;
    }


    var getEmployees = function(){
        var employeeList = [];
        console.log('got here');
        $.ajax({
            url:'http://localhost:3000/master'
        }).done(function(response){
            for(var i = 0; i < response.length; i++){
                toAppend = "<li>" + response[i].join(", ") + "</li>";
                $(".employee-list").append(toAppend);
            };
        });
    };

    $(".project-generator").on("click", function(){

        var companyName = getCompany();

        var frontEndValue = 0;
        var cliLog = 0;
        var serLog = 0;

        function getScrumValues(){
            frontEndValue = randomNumber();
            cliLog = randomNumber();
            serLog = randomNumber();
        }
        getScrumValues();

        var scrumValues = "<ul class='scrum-values'><li>Front End: " + frontEndValue + "</li><li>Clientside Logic: " + cliLog + "</li><li>Serverside Logic: " + serLog + "</li></ul>"

        var appendMessage = "<div class='company-container'><h2>" + companyName + "</h2><p>" + scrumValues + "</p></div><ul class='employee-list'></ul>";

        $(".project").html(appendMessage);

        getEmployees();

    })
});

////Sprints calc
//frontEnd = frontEndValue / frontEndTotal;
//cliSide = cliLog / cliSideLogTotal;
//serSide = serLog / serSideLogTotal;
//
////Whichever one is greatest = math.ceiling(sprints)
