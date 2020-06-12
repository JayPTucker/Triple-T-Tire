// NAVBAR SCROLLING CUSTOMIZATION
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

var x = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    x.style.top = "0";
  } else {
    x.style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

// NAVBAR MINIMIZING FUNCTION?
function navbarMinimize() {
  var x = document.getElementById("navbar");
  if (x.className === "header topnav sticky-top fixed-top container-fluid") {
    x.className += " responsive";
  } else {
    x.className = "header topnav sticky-top fixed-top container-fluid";
  }
}