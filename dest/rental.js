$(document).ready(function () {
  let numbSlide = $(".rental__slide .infor-numb .number");
  let numbOfPages = $(".btn_numbpage a");
  numbOfPages.on("click", function (e) {
    e.preventDefault();
    let numbSlideCurrent = numbSlide.text();
    numbOfPages.removeClass("is-selected");
    $(this).addClass("is-selected");
    console.log(numbSlideCurrent);
    numbSlide.text($(this).text());
  });
});
