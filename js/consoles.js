
var samplestring = " lets start our journey with a java start script ";
console.log(samplestring.indexOf("start"));
console.log(samplestring.lastIndexOf("start"));
console.log(samplestring.slice("5,11"));

console.log(samplestring.replace("journey","advanture")); //this is an object
// console.log(samplestring.toLowerCase("start"));
console.log(samplestring.toUpperCase("start"));



var name1 = "peerbit";
var name2 = new String("peerbit"); //object

if ( name1 === name2 ){

	console.log("this is true value");

} else {

    console.log("this is false value");
}
