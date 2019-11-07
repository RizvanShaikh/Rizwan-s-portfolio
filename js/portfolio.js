/*==============================================
 |     |      |  Scroll Navigation bar 
 ==============================================*/
 /*show & hide navigation*/
 $(function () {
     // show hide nav call on page load (it is hoing to happen on page load)
     showHideNav();
     $(window).scroll(function () {
         // alert ("you just scrolled");
         // window on scroll call (it is hoing to happen on page scroll)
         showHideNav();
     });

     function showHideNav() {
         if ($(window).scrollTop() > 50) {

             // alert ("your scroll position greater  than 50px = " + $(window).scrollTop());
           // by writing addClass it will add class of white-nav-top  in the HTML by 50px
             $("nav").addClass("white-nav-top");

             

             // Show Back to Top Button
             $("#back-to-top").fadeIn();
         } else {
             // alert ("your scroll position lessthan  than 50px = " + $(window).scrollTop());
             $("nav").removeClass("white-nav-top");

            

             // Hide Back to Top Button
             $("#back-to-top").fadeOut();
         }
     }
 });
 // smooth scrolling easing effect
 // http://gsgd.co.uk/sandbox/jquery/easing/
 $(function () {

     $("a.smooth-scroll").click(function (event) {
      // it will stop the default action from the happning
         // event.preventDefault();
         // get section id like #about,#services,#work,#team etc.
         var section_id = $(this).attr("href");
         $("html,body").animate({
             scrollTop: $(section_id).offset().top - 64
         }, 1250, "easeInOutExpo");
        // above easeinoutexpo is from esing plugin visit about website
     });

 });