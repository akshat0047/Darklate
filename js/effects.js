//TYPING EFFECT WITH typed.js

var typed = new Typed(".t1", {
  strings: ["Workshops", "Seminars", "Promotions"],
  typeSpeed: 50,
  fadeOut: true,
  loop: true,
  showCursor: false
});
var type = new Typed(".duty", {
  strings: ["Designer", "Developer", "Dancer"],
  typeSpeed: 50,
  fadeOut: true,
  loop: true,
  showCursor: false
});

//SLICK CAROUSEL

$(document).ready(function() {
  $(".filmstrip").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    arrows: false,
    prevArrow: '<i class="fas fa-chevron-left gl" />',
    nextArrow: '<i class="fas fa-chevron-right gr" />',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
