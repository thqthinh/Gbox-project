$(document).ready(function () {
  let $carousel = $(".hero__image").flickity({
    fullscreen: true,
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });
  $(".hero__heading-ctr .control.--full-screen").on("click", function () {
    $carousel.flickity("viewFullscreen");
  });
});
