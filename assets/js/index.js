// NAVBAR SCROLLING CUSTOMIZATION
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

var x = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    x.style.top = "0";
    // x.style.zIndex = "0";
    // x.style.position = "relative";
  } else {
    x.style.top = "-360px";
    // x.style.position = "absolute";
  }
  prevScrollpos = currentScrollPos;
}

// NAVBAR MINIMIZING FUNCTION?
function navbarMinimize() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("intro-container")
  if (x.className === "header topnav sticky-top fixed-top container-fluid") {
    x.className += " responsive";
    y.style.marginTop = "-90px";
  } else {
    x.className = "header topnav sticky-top fixed-top container-fluid";
    y.style.marginTop = "0px";
  }
}

function changeStore() {
  var selected = document.getElementById("stores").value;
  console.log(selected)
  
}








// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }

// initialize()