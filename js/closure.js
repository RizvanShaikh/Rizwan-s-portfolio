
 var couneter = (function () {
	var rizwan=0;
	return function(){return rizwan += 1;}
}) ();

 console.log(couneter());
 console.log(couneter());
 console.log(couneter());

 var name1 = function () {
 	         var car = 0;
 	        return car += 1;
 } 

 console.log(name1());
 console.log(name1());
 console.log(name1());
 console.log(name1());
 console.log(name1());
 console.log(name1());
 console.log(name1());

//var rizwan="this is java script";
//document.getElementById("change").innerHTML = rizwan.replace("java","JAVA");
document.getElementById("change").innerHTML = "change by script";
