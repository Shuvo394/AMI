// Fixed Nav
$(function() {
    $(window).scroll(function() {
      var scrolling = $(this).scrollTop();
      if (scrolling > 200) {
        $("nav").addClass("nav-bg");
        $(".nav-link").addClass("link-color");
        console.log(scrolling);
      }
      else {
        $("nav").removeClass("nav-bg");
        $(".nav-link").removeClass("link-color");
      }
    })
  });

AOS.init();

$('.counter').counterUp();

