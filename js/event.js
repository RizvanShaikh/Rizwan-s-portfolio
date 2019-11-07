

function showDate() {
	console.log("enter in showDate")
	
     var rizwan = Date();
     myfun()
     console.log("rizwan  ==>",rizwan)
     console.log("rizwan  ==>",typeof rizwan)
     document.getElementById("test").innerHTML = rizwan;
     console.log("exit from  showDate")
}


function myfun(){
	console.log("enter in myfun")
}/*
	var rizwan = myfun()
	console.log("exit from  myfun")
}*/