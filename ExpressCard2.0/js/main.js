$(document).ready(function () {
  $(".items").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 900,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3500,
  });
});

$(".menu-btn").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("menu-btn_active");
  $(".logo-head").toggleClass("logo-head__active");
  $(".header__mob").toggleClass("header__mob__active");
  // $(".header__btn").toggleClass("header__btn__active");
});


$(".mob-btn").click(function () {
  $(".menu-btn").removeClass("menu-btn_active");
  $(".logo-head").removeClass("logo-head__active");
  $(".header__mob").removeClass("header__mob__active");
});
