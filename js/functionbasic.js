
//it will show in html
function rizwan(faizan){

	return   (2 * faizan);
	       
}

document.getElementById("test").innerHTML=rizwan(4) ;//here function has been called


//by using console
function farrari(porchee){
         
    var jaguar = 10 * porchee;
    return jaguar;
}

console.log(farrari(8)); //here function has been called

//without function name, take this into variable
var farhan = function (porchee){ 
         
    return  10 * porchee;
}

console.log(farhan(3));
//this is same for rizwan function getElementById 
 