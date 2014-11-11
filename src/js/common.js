head.ready(function() {

  function indexHeight() {
    var bodyheight = $(window).height();
    // var getpadding = $('.js-set-height').css('padding-top');
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight()

  function headerAbsolute() {
    if ($(window).width() <= 1330) {
      $('.header').addClass('is-absolute');
    }
  }
  headerAbsolute()

  $(window).resize(function(){
    headerAbsolute()
  });

});

(function($){
  $(window).load(function(){
    $(".js-scroll").mCustomScrollbar({
      scrollButtons:{
        enable:false
      }
    });
  });
})(jQuery);