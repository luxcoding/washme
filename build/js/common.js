head.ready(function() {
  // height page
  function indexHeight() {
    var bodyheight = $(window).height();
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight();

  $('.js-hide').on('click', function() {
    $(this).parent().addClass('bounceOutLeft').addClass('fadeOutLeft');
    var element = $(this);
    imgTimeout = setTimeout(function(){element.parent().css('display','none');}, 1500); 
  });

  // popup
  $('.js-send-popup1').click(function(event) {
    $('.js-popup-1').addClass('js-popup-open').addClass('fadeIn').children('.popup').addClass('bounceInDown');
    return false;
  });

  $('.js-send-popup2').click(function(event) {
    $('.js-popup-2').addClass('js-popup-open').addClass('fadeIn').children('.popup').addClass('bounceInDown');
    return false;
  }); 

$('.popup-out').on('click', function() {
  $(this).removeClass('js-popup-open').removeClass('fadeIn').children('.popup').removeClass('bounceInDown');
});
$('.popup').on('click', function(e) {
  e.stopPropagation();
});

  $('.popup-bg').click(function(event) {
    $(this).parent().removeClass('js-popup-open');
    return false;
  });

  $('.js-popup-close').click(function(event) {
    $(this).parents('.popup-out').removeClass('js-popup-open');
    return false;
  });

  // order active
  $('.order-add').click(function(event){
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    }
    else {
      $('.order-add').removeClass('is-active');
      $(this).addClass('is-active');
    };
    event.stopPropagation();
  });

  $(document).click(function() {
    $('.order-add').removeClass('is-active');
  });

  // tooltip
  $('.js-tooltipster').tooltipster({
    trigger: 'click',
    position: 'bottom',
    contentAsHTML: true
  });

  $(window).keypress(function() {
    $('.js-tooltipster').tooltipster('hide');
     $('.order-add').removeClass('is-active');
  });

  // resize
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