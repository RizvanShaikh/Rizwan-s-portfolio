
greeting = "";
//var harley = ["street750","streetbob","fatboy","streetglide","iron883"];

var i =0;

while ( i < 20 ){

	
	greeting += "<br> the new number is" + i ;

	i++
 }
/*
i = 25;
 do {
 	greeting += "<br> the new number is" + i ;

 	i++
 } while( i < 20 )*/

 document.getElementById("test").innerHTML= greeting;