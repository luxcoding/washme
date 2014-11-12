head.ready(function() {

  function indexHeight() {
    var bodyheight = $(window).height();
    // var getpadding = $('.js-set-height').css('padding-top');
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight();

  $('.js-hide').on('click', function() {
    $(this).parent().hide();
  });

  $(window).resize(function(){
    headerAbsolute();
  });

  $('.i-coffee').click(function(event) {
    $('.js-popup-1').addClass('js-popup-open');
    return false;
  });

  $('.i-wifi').click(function(event) {
    $('.js-popup-2').addClass('js-popup-open');
    return false;
  }); 

  $('.popup-bg').click(function(event) {
    $(this).parent().removeClass('js-popup-open');
    return false;
  });

  $('.js-popup-close').click(function(event) {
    $(this).parents('.popup-out').removeClass('js-popup-open');
    return false;
  });

});

function headerAbsolute() {
  if ($(window).width() <= 1330) {
    $('.header').addClass('is-absolute');
  }
  else {
      $('.header').removeClass('is-absolute');
  }
}
headerAbsolute();

(function($){
  $(window).load(function(){
    $(".js-scroll").mCustomScrollbar({
      scrollButtons:{
        enable:false
      }
    });
  });
})(jQuery);