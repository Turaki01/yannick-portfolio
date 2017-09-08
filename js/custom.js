//preloader
$(window).load(function(){
  $('.preloader').fadeOut(3000); 
});

//smoothscroll
$(function() {
  $('#home a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
    }, 1000);
    event.preventDefault();
  });
});
