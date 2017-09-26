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
  document.getElementById("contact-button").disabled = false;
  event.preventDefault();
}


// Google Invisible reCAPTCHA - Enable submit BUTTON after verification is passed
/* function enableContact() {
  $('#contact-button').removeAttr("disabled");
}
*/

// ******************************

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// ******************************

// CONTACT FORM THROUGH OUTLOOK
/* 
$(function() {
	handleContactSubmission();
});
function handleContactSubmission() {
  $('form').submit(function(e) {
    e.preventDefault();
    var first = $('input[name=first]').val();
    var last = $('input[name=last]').val();
    var subject = $('input[name=subject]').val();
    var message = $('textarea[name=message]').val();
 
    var url = 'mailto:nihar@purdue.edu?&subject=' + first + ' ' + last + ': ' + subject + '&body=' + message;
 
    var win = window.open(url, '_blank');
    win.focus();
  });
}
*/
