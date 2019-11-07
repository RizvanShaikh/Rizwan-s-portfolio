  
function clocky(){

 var d,h,m,s;
 d= new Date();
 h= d.getHours();
 m= d.getMinutes();
 s= d.getSeconds();

 if ( h <= 9 ){
 	h = '0' + 1
 }

 if ( m <= 9 ){
 	m = '0' + 1
 }

 if ( s <= 9 ){
 	s = '0' + 1
 }
var Timer ;
Timer = h + ":" + m + ":" + s ;

console.log(Timer);
console.log(document.getElementById("clock"));

document.getElementById("clock").innerHTML = Timer;

setTimeout(clocky,1000)
// console.log(clock);

} 

clocky();