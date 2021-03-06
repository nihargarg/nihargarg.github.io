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
    strings: ["Robotics Engineer", "Systems Designer", "Project Manager"],
    loop: true,
    typeSpeed: 0
  });
});

// Google reCAPTCHA V2 - Enable submit INPUT after verification is passed
/*
function enableAnalyze() {
  event.preventDefault();
  document.getElementById("analyze-button").disabled = false;
} */