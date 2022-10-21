
var buttonColors=["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

var started=false;
var level=0;

// KEYBOARD KEY PRESSED

$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level "+level);
  nextSequence();
  started=true;


}
})

 // BUTTON PRESSED
$( ".btn" ).click(function() {

var userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer((userClickedPattern.length)-1);
});



// check answer
function checkAnswer(currentLevel){
  var numberOfCorrectAnswers=0;

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]) {console.log("success");
    if (userClickedPattern.length === gamePattern.length){


      setTimeout(function () {
        nextSequence();
      }, 1000);
  } }
  else {playSound("wrong");
    gameOver();
   $("#level-title").text("Game Over, Press Any Key to Restart");
   startOver();
  }
}

// wrong Answer
function gameOver(){
 $("body").addClass("game-over")
 setTimeout(function () {
     $("body").removeClass("game-over");
}, 200);
}
// start over
function startOver(){
  level=0;
  started=false;
  gamePattern=[];
}
function nextSequence(){

 userClickedPattern = [];

 level++;
 $("#level-title").text("Level " + level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);



}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor){
$("."+currentColor).addClass("pressed");
  setTimeout(function () {
      $("."+currentColor).removeClass("pressed");
}, 100);
}
