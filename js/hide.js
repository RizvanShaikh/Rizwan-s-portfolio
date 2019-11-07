

// $(document).ready(function () {
// 	$("button").click(function () {
// 		$("p").toggle();
// 	});
// });

/*in the jQuery if you want to do process on the <p> or <h1> which is having an class. so you will 
putin jQuery $("p.rizwan") or $("h1.rizwan").if you want to process on id or class can do just
like that $(".rizwan" ) or $(" #rizwan"). if you want to process on to first paragarph shown in 
hide.html so you will do $("p:first").hide(); */

function myfun() {
	
var handler=document.getElementById('hide2');
handler.hidden=true;
console.log(handler);  
// handler.hide();

}
