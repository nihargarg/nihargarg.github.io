// HOVER TEXT IN HEADER
function helloEnter(x) {
  x.textContent = "Nihar Garg."
}
function helloLeave(x) {
  x.textContent = "Hi, my name is Nihar"
}

// SCROLL TEXT IN HEADER
$(function(){
  $(".scrollText").typed({
    strings: ["Mechanical Engineer", "Problem Solver...", "Tech Enthusiast..."],
    loop: true,
    typeSpeed: 0
  });
});

// Google reCAPTCHA V2 - Enable submit INPUT after verification is passed
function enableContact() {
  event.preventDefault();
  document.getElementById("contact-button").disabled = false;
}

/* Arrow bounce
$('.arrow').click(function() {
  $('html, body').animate({
      scrollTop: $(".home-main").offset().top
    }, 700);
  return false;
});
*/