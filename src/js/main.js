$(document).ready(function() {


  //показываем активную кнопку
  $(".icon-list img").attr('src', '../img/icons/cat/icon-list-hover.png');
  //табы grid list
  $(".icon-block").click(function(){
    $(".icon-list img").attr('src', '../img/icons/cat/icon-list.png');
    $(".icon-block img").attr('src', '../img/icons/cat/icon-block-hover.png');
    $(".product-thumb-grid").removeClass('product-thumb-list');
    $(".product-thumb-grid").addClass('col-lg-4 col-md-4 col-sm-6');
    $(".desc-block").addClass("hidden");
  });

  $(".icon-list").click(function(){
    $(".icon-block img").attr('src', '../img/icons/cat/icon-block.png');
    $(".icon-list img").attr('src', '../img/icons/cat/icon-list-hover.png');
    $(".product-thumb-grid").removeClass('col-lg-4 col-md-4 col-sm-6');
    $(".product-thumb-grid").addClass('product-thumb-list');
    $(".desc-block").removeClass("hidden");
  });


  //slider jquery ui
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 25000,
    values: [ 5000, 15000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ]);
      $( "#amount2" ).val(ui.values[ 1 ]);
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0 ));
  $("#amount2").val($("#slider-range").slider( "values", 1 ));

  // Изменение местоположения ползунка при вводе данных в первый
  $("input#amount").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount2").val();
    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount").val(value1);
    }
    $("#slider-range").slider("values",0,value1);
  });

  // Изменение местоположения ползунка при вводиде данных в второй
  $("input#amount2").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount2").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount2").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount, #amount2').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;

    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;

    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);

    if(!/\d/.test(keyChar))	return false;

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
    slidesToScroll: 2,
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