// NAVBAR SCROLLING CUSTOMIZATION
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

var x = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    x.style.top = "0";
  } else {
    x.style.top = "-180px";
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

// GOOGLE MAPS API
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}