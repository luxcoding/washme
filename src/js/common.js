head.ready(function() {
  // height page
  function indexHeight() {
    var bodyheight = $(window).height();
    var sumHeight = (bodyheight - 211);
    var setHeight = $('.js-set-height').css('height', sumHeight);
  }
  indexHeight();

  // $('.js-hide').on('click', function() {
    // $(this).parent().addClass('bounceOutLeft').addClass('fadeOutLeft');
    // var element = $(this);
    // imgTimeout = setTimeout(function(){element.parent().css('display','none');}, 1500); 

  // });

  $('.js-send-remove-popup').on('click', function() {
    // получили отрибут текущего order
    var getAttr = $(this)
    // открытие попапа
    $('.js-remove-popup').addClass('js-popup-open').addClass('fadeIn').children('.popup').addClass('bounceInDown');
    // закрытие текущего order при клике на "удалить" в попапе
    $('.js-hide').on('click', function(event) {
      var element = getAttr;
      element.parent().addClass('bounceOutLeft').addClass('fadeOutLeft');
      imgTimeout = setTimeout(function(){element.parent().css('display','none');}, 1500); 
    });
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
  $('.order-add').on('click', function(e) {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    }
    else {
      $(this).addClass('is-active');
      e.stopPropagation();
    };
  });

  $(document).click(function() {
    if ($('.order-add').hasClass('is-active')) {
      $('.order-add').removeClass('is-active');
    }
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

  $('.js-tooltipster-hover').tooltipster({
    trigger: 'hover',
    position: 'bottom',
    interactive: true,
    contentAsHTML: true
  });


  $('.js-send-red').on('click', function() {
    $('.wash-contacts-info').hide();
    $('.wash-my').hide();
    $('.wash-contacts-red').show(); 
    $('.wash-red').addClass('is-active');
    $(this).hide();
    $('.wash-my-save').addClass('is-active');
    $('.wash-option-active').hide();
    $('.wash-option-readme').show();
  });

  $('.js-send-save').on('click', function() {
   $('.wash-contacts-info').show();
   $('.wash-my').show();
   $('.wash-contacts-red').hide(); 
   $('.wash-red').removeClass('is-active');
   $('.js-send-red').show();
   $('.wash-my-save').removeClass('is-active');
   $('.wash-option-active').show();
   $('.wash-option-readme').hide();
  });

  // resize
  $(window).resize(function(){
    headerAbsolute();
  });

  $(function() {
   $('.wash-input').placeholder();
  });  

  $(".animsition").animsition({
  
    inClass               :   'fade-in-up',
    outClass              :   'fade-out-up',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link', 
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    false,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
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