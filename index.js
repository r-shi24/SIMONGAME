
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "yellow", "green", "blue"];
var audio = new audio('drum kit/sounds/crash.mp3');
audio.play();
$(document).on("keydown", function(event){

  if (event.key)

  {

    nextSequence();
  }
});
$(".btn").click(function()
{
  var choosenButton = $(this).attr("id");
  userClickedPattern.push(choosenButton);
  console.log(userClickedPattern);
});
function newSequence()
{
  var randomNumber = Math.random();
  randomNumber = 4*randomNumber;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

}
newSequence();
