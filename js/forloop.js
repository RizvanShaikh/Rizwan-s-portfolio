

greeting = "";
var harley = ["street750","streetbob","fatboy","streetglide","iron883"];

   /* greeting += harley [0] + "<br>";
    greeting += harley [1] + "<br>";
    greeting += harley [2] + "<br>";
    greeting += harley [3] + "<br>";
    greeting += harley [4] + "<br>";*/
 
//  another method is by forloop
 var i;

 for ( i = 0; i < 5; i++ ) {
           greeting += harley [i] + "<br>"; 
 }
/*

 for ( i = 0; i < harley.length; i++) {
 	       greeting += harley[i] + "<br>";
 }*/

// by using forin loop
for ( i in harley) {
 	       greeting += harley [i] + "<br>";
 }


document.getElementById("test").innerHTML = greeting;