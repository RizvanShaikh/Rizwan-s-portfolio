// $(function () {
// 	$("h1").click(function(){
//       $(".animate").slideToggle(1000);
// 	});
// });

$(function () {
	$(".btn").click(function(){
      $("img").animate({
      	height: '+=100px',
      	width: '+=100px'
      },1000);
	});
});

// $(function () {
// 	$("h1").click(function(){
//       $(".animate").css('background-color','purple').slideUp(1000).slideDown(1500);
// 	});
// });