
function clocky() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
    var s = d.getSeconds();

if (h <= 9){
	h = '0' + h;
}

if (m <= 9){
	m = '0' + m;
}

if (s <= 9){
	s = '0' + s;
}
var clock;
clock = h + ":" + m + ":" + s
document.getElementById("clock").innerHTML = clock;
console.log(clock);

var rizwan = setTimeout(clocky,1000);
console.log(rizwan);
}

clocky();