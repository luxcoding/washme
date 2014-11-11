head.ready(function() {

  function indexHeight() {
    var bodyheight = $(window).height();
    // var getpadding = $('.js-set-height').css('padding-top');
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight()

});