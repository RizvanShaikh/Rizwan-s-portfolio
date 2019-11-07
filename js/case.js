
var value = 25;
var rizwan=75;

switch (3) {
	case 0:
	   greeting = "i don't move on sunday";
	   break;

	case 1: 
	   greeting = "Monday! go to work";
	   break;

	case 2:
	   greeting = "Tuesday! chill out with family";
	   break;

	case 3:
	   greeting = "Wednesday! focus on learning";
	   break;

	case 4:
	   greeting = "thursday! anaylize the outcome";
	   break;

	case 5:
	   greeting = "Friday! last day of work";
	   break;

	case 6:
	   greeting = "saturday! party night";
	   break;

	default:
	   greeting = "HEY! what are you sending me.";
	   break;  

}


document.getElementById("test").innerHTML= greeting;
