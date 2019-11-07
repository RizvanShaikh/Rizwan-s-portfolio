
greeting ="";
var i;


for ( i = 0; i < 20; i++){

    if ( i == 10 ) { continue; } //{ break; }

	greeting += "<br> your new score is" + i ;
}

document.getElementById("test").innerHTML = greeting;