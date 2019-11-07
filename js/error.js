
/*try{
     aleert("Hello world");
}
catch(err){
	document.getElementById("test").innerHTML = err.message ;
 }*/
function myError(){
	var msg, x;
	//here we targeted paragraph
	msg = document.getElementById("msg"); //it get a controll
	 msg.innerHTML = "";
   // here we targeted inputtype
    // x= document.getElementById("some").value;
    x= document.getElementById("inputtype"); //it get value
             x1=x.value;                  
    console.log(x1);
    // x1= x.value
    // console.log(x1);
    // console.log("helloooo");
    // console.log("hello i am rizwan i found value of x ",x1);

    try{
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
    	if ( x1 == "" ) throw "please choose a number";
    	if ( isNaN(x1) )	throw "only number are allowed";
    	if ( x1 < 4 ) throw "choose a number greater than 3";	
   
    } catch(err) {
            // if error occurs this block of code will be  executed
           document.getElementById("msg").innerHTML = " Error is : " + err;
    
    } finally {
          // this block of code should be obligatery executed
    	document.getElementById("inputtype").value = " " ; 
    }

}