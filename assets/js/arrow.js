// Arrow bounce
$('.arrow').click(function() {
  $('html, body').animate({
      scrollTop: $(".home-main").offset().top
    }, 700);
  return false;
});