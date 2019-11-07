
var d,h,m,s,clock;

function clocky(){
      
      d = new Date();
      h = d.getHours();
      m = d.getMinutes();
      s = d.getSeconds();

if ( h <= 9 ) {
	 
	 h = '0' + h;
}

if ( m <= 9 ) {
	 
	 m = '0' + m;
}

if ( s <= 59 ) {
	 
	 s = '0' + s;
}
	 

clock = h + ':' + m + ":" + s ;

setTimeout(clocky,1000); //1000 mili seconds = 1 seconds  
document.getElementById("clock").innerHTML = clock ;
} 
   
   clocky()
