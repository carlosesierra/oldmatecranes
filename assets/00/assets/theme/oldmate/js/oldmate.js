jQuery(document).ready(function ($) {
  $('li a').click( function() {
    $('.collapse').collapse('hide');
  });

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-80
        }, 1000);
        return false;
      }
    }
  });
});


  $(document).ready(function(){
  	$('.fadeIn').removeClass('hide').addClass('show')
  });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeSlide').each( function(i){
            var bottom_of_object = $(this).offset().top + (($(this).outerHeight())/2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
      });
    });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('.icon-bar').addClass('bgred');
        $('.menu li a').addClass('text-red');
        $('.sidebar').addClass('bgred');
        $('.list-group').addClass('bgnone');
    } else {
        $('.icon-bar').removeClass('bgred');
        $('.menu li a').removeClass('text-red');
        $('.sidebar').removeClass('bgred');
        $('.list-group').removeClass('bgnone');
    }
  });

});
