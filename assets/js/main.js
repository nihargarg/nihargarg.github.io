// SMOOTH SCROLL
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ******************************

// HOVER TEXT IN HEADER
function helloEnter(x) {
  x.textContent = "Nihar Garg."
}
function helloLeave(x) {
  x.textContent = "My name is Garg,"
}

// SCROLL TEXT IN HEADER
$(function(){
  $(".scrollText").typed({
    strings: ["Mechanical Engineer...", "Problem Solver...", "Tech Enthusiast..."],
    loop: true,
    typeSpeed: 0
  });
});

// ******************************

// Google reCAPTCHA V2 - Enable submit INPUT after verification is passed
function enableContact() {
  event.preventDefault();
  document.getElementById("contact-button").disabled = false;
}
