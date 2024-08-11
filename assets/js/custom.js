(function ($) {
	
	"use strict";
// owl carousel 
$('.banner-carousel').owlCarousel({
  autoplay: false,
  smartSpeed: 1000,
  center: true,
  margin: 24,
  loop:false,
  margin:20,
dots:true,
nav: false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
  1000:{
          items:1
      },
      1200:{
          items:1
      }
  }
});

$('.counter').counterUp({
  delay: 10,
  time: 3000
});

// owl carousel 
$('.client-carousel').owlCarousel({
  loop:false,
  margin:20,
dots:true,
nav: false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
  1000:{
          items:1
      },
      1200:{
          items:1
      }
  }
});
// testimonial-slider 
var $testimonialSlider = $(".testimonial-slider");
$testimonialSlider.owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    autoplayTimeout: 7000,
    autoplay: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 2,
        },
        1300: {
            items: 2,
        },

    }
});

$('.videos-icon').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
  
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        }
  
      },
      srcAction: 'iframe_src',
    }
  });
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
})(window.jQuery);