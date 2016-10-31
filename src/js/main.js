$(document).ready(function() {

  //Каруселька топ
  $(".slick-top").slick({
    dots: true,
    infinite: true,
    arrows: true,
    //autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000
  });

  //Каруселька Новинки/Акции/Хиты продаж
  $(".slick-bot").slick({
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
  })
});