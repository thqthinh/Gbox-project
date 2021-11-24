const header = document.querySelector(".header__top");
const heightHeader = header.offsetHeight;
window.addEventListener("scroll", function () {
  if (this.window.scrollY > heightHeader) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
let headerNav = document.querySelector(".header__nav");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > headerNav.offsetHeight + heightHeader) {
    headerNav.classList.add("active");
  } else {
    headerNav.classList.remove("active");
  }
});

new WOW().init();

$(document).ready(function () {
  $(".footer__backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 });
  });
  const toggleNav = $(".header .header__top-left");
  const navMobile = $(".nav");
  let hamburger = $(".header__top-left .logo");
  const body = $("body");
  toggleNav.on("click", function () {
    hamburger.toggleClass("is-selected");
    navMobile.toggleClass("active");
    body.toggleClass("menu-is-active");
  });
  $(window).bind("resize", function () {
    if ($(this).width() > 991) {
      hamburger.removeClass("is-selected");
      navMobile.removeClass("active");
    }
  });

  let $carousel = $(".hero__slider-wrap");
  $($carousel).flickity({
    // options
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });
  $(".hero__bottom-ctr .--prev").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".hero__bottom-ctr .--next").on("click", function () {
    $carousel.flickity("next");
  });
  $(".btn_fullscreen").on("click", function () {
    $carousel.flickity("viewFullscreen");
  });
});
