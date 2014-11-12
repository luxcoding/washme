head.ready(function() {

  function indexHeight() {
    var bodyheight = $(window).height();
    // var getpadding = $('.js-set-height').css('padding-top');
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight();

  $('.js-hide').on('click', function() {
    $(this).parent().fadeOut();
  });

  $(window).resize(function(){
    headerAbsolute();
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