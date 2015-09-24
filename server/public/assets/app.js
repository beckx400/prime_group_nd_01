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
//Generate Random Number for Scrum Values
    function randomNumber(){
        var randomNumber = Math.floor(Math.random() * (51) + 10);
        return randomNumber;
    }

//
    $(".project-generator").on("click", function(){

        var companyName = getCompany();

        var frontEndValue = 0;
        var cliLogValue = 0;
        var serLogValue = 0;

        function getScrumValues(){
            frontEndValue = randomNumber();
            cliLogValue = randomNumber();
            serLogValue = randomNumber();
        }
        getScrumValues();

        var scrumValues = "<ul class='scrum-values'><li class='make-bold'>Scrum Points Needed</li><li>Front End: " + frontEndValue + "</li><li>Clientside Logic: " + cliLogValue + "</li><li>Serverside Logic: " + serLogValue + "</li></ul>"

        var appendMessage = "<div class='company-container'><h2>" + companyName + "</h2><p>" + scrumValues + "</p></div><ul class='employee-list'><li class='make-bold'>Employees</li></ul><p class='sprints'></p><button class='add-employee'><span class='glyphicon glyphicon-plus'></span> Add New Employee</button>";

        $(".project").html(appendMessage);

        var getEmployees = function(){
            console.log('got here');
            $.ajax({
                url:'http://localhost:3000/master'
            }).done(function(response){
                for(var i = 0; i < response.length; i++){
                    toAppend = "<li>" + response[i].join(", ") + "</li>";
                    $(".employee-list").append(toAppend);

                };

                var newFrontEnd = 0;
                var newCliLog = 0;
                var newSerLog = 0;

                for(var i = 0; i < response.length; i++){
                    switch(response[i][1]){
                        case "Front End":
                            newFrontEnd += parseInt(response[i][2]);
                            break;
                        case "Clientside Logic":
                            newCliLog += parseInt(response[i][2]);
                            break;
                        case "Serverside Logic":
                            newSerLog += parseInt(response[i][2]);
                            break;
                    }
                }
    console.log("FIRST" + newFrontEnd);
            $(document).on('click', '.add-employee', function() {
                $.ajax({
                    url: 'http://localhost:3000/addemployee'
                }).done(function (response) {
                    switch(response[1]){
                        case "Front End":
                            newFrontEnd += parseInt(response[2]);
                            console.log(newFrontEnd);
                            break;
                        case "Clientside Logic":
                            newCliLog += parseInt(response[2]);
                            break;
                        case "Serverside Logic":
                            newSerLog += parseInt(response[2]);
                            break;
                    }
                    $(".employee-list").append("<li>" + response.join(", ") + "</li>");

                    var frontEndSprints = Math.ceil(frontEndValue / newFrontEnd);
                    var cliLogSprints = Math.ceil(cliLogValue / newCliLog);
                    var serLogSprints = Math.ceil(serLogValue / newSerLog);

                    var sprint = Math.max(frontEndSprints, cliLogSprints, serLogSprints);

                    $(".sprints").html("<h3>Sprints: " + sprint + "</h3>");
                })
            });


                var frontEndSprints = Math.ceil(frontEndValue / newFrontEnd);
                var cliLogSprints = Math.ceil(cliLogValue / newCliLog);
                var serLogSprints = Math.ceil(serLogValue / newSerLog);

                var sprint = Math.max(frontEndSprints, cliLogSprints, serLogSprints);

                $(".sprints").html("<h3>Sprints: " + sprint + "</h3>");
            });
        };
        getEmployees();
    })

});

