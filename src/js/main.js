$(document).ready(function() {

  //slider
  $('.nstSlider').nstSlider({
    "rounding": {
      "100": "1000",
      "1000": "10000",
      "10000": "10000"
    },
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      var $container = $(this).parent();
      $container.find('.leftLabel').text(leftValue);
      $container.find('.rightLabel').text(rightValue);
    }
  });

  //hover
  $('#empty_img').hover(function() {
    $("#empty_img").attr('src', '../img/icons/bascket_empty_hover.svg');
  }, function() {
    $("#empty_img").attr('src', '../img/icons/bascket_empty.svg');
  });
  $('#full_img').hover(function() {
    $("#full_img").attr('src', '../img/icons/bascket_item_hover.svg');
  }, function() {
    $("#full_img").attr('src', '../img/icons/bascket_item.svg');
  });

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
    speed: 500,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false
        }
      }]
  });

  //Каруселька Новинки/Акции/Хиты продаж
  $(".slick-bot").slick({
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    })
});