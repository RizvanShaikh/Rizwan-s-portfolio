//video 74
//var greeting = "";
var highScore = 453;
var myScore = 453;
 //here condition is true
if (myScore > highScore) {
	greeting = "OOPS! you just missed highscore."

} else if(myScore==highScore) {
	greeting = " HURREY!this is a equal value."

} else {
    greeting = "this isn't a highscore."
}

document.getElementById("test").innerHTML= greeting;