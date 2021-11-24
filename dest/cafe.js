$(document).ready(function () {
  $(".gallery__slide a").simpleLightbox({
    /* options */
    spinner: true,
    doubleTapZoom: 2,
  });
  let $carousel = $(".gallery__wrapper");
  $($carousel).flickity({
    // options

    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });
  $(".gallery__ctr .--prev").on("click", function (e) {
    e.preventDefault();
    $carousel.flickity("previous");
  });
  $(".gallery__ctr .--next").on("click", function (e) {
    e.preventDefault();
    $carousel.flickity("next");
  });
});
