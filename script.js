//how to write in jsquery
//$(document).ready(function(){

// all the code

//});

//message answer


$(document).ready(function(){

    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        //to show the answer 
        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };
  
//button ask question
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
    };

    $("#questionButton").click( onClick );

});


