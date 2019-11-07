
$(function () {
     // slideInUp the iphone
	$(".js-wp-2").waypoint( function(direction) {
           $(".js-wp-2").addClass("animated slideInUp");
	}, {
         offset: "50%" 
     });
    //  screen 
    $(".js-wp-3").waypoint( function(direction) {
           $(".js-wp-3").addClass("animated fadeIn");
	}, {
         offset: "50%" 
     });
    // for the click button
	$(".iphone-btn").delay(2100).animate( { bottom: "+=-3" }, 300 ); 
    $(".iphone-btn").delay(300).animate( { top: "+=-3" }, 100 ); 


});

// animate on scroll
 $(function () {
     new WOW().init();
 });





