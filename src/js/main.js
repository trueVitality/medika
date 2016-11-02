$(document).ready(function() {

  //Форма Заказать звонок
  $(".phone-icons").click(function(event) {
    event.preventDefault();
    $('.popup-form').fadeIn(300,
      function(){
        $(this)
          .css('display', 'block').animate({opacity: 1}, 300);
      });
  });
  $(".phone-icon,.close_icon").click(function(event) {
    event.preventDefault();
    $(".popup-form").animate({opacity: 0}, 300, function(){
      $(this).css('display', 'none');
      $('.popup-form').fadeOut(350);
    });
  });

  //кнопка вверх
  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 800; // Задержка прокрутки
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#up-button').fadeIn();
      else $('#up-button').fadeOut();
    });
    $('#up-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });

  //ширина ховер контент блока на весь сайт
  var widthR = $(window).width();
  $("#content_drop").css('width', widthR);

  //Каруселька топ
  $(".slick-top").slick({
    dots: true,
    infinite: true,
    arrows: true,
    //fade: true,
    speed: 500
  });

  //Каруселька Новинки/Акции/Хиты продаж
  $(".slick-bot").slick({
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
  })
});