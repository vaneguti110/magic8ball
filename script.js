//how to write in jsquery
//$(document).ready(function(){

// all the code

//});

//message answer


$(document).ready(function(){

    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
 //button to hide answer
$("#answer").hide();  
  
  
    magic8Ball.askQuestion = function(question){
      
      
//code to make appear the pink triangle image  when answer the question
$("#eightballImage").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );

                console.log(question);
        console.log(answer);
    };

  
//button to hide question
$("#answer").hide();  
//answer will fade in 4 seconds  
$("#answer").fadeIn(4000);

//code to make the settimeout function to wait until it appear the message for 3 seconds  
  console.log("I show immediately!")
 
setTimeout(
    function() {
        console.log("I wait 3 seconds, then show!")
    }, 3000);
  

//code to make appear the image 8 when asking the question
$("#eightballImage").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
//button ask question
    var onClick = function() {
      //wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt  
      
      var question = prompt("ASK A YES/NO QUESTION!");
 //shake effect of the 8ball when asking a question

$("#eightballImage").effect("shake");
      magic8Ball.askQuestion(question)
    },500);//time to show the message pop up .5 sec when click on the asking me button
      
};

    $("#questionButton").click( onClick );

});






