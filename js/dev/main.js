//
// main.js
//

function IsMobile() {
 return !!( navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/iPad/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/BlackBerry/i) ||
     navigator.userAgent.match(/Windows Phone/i)
 );
}

// Stop canvas from being drawn on mobiles
if(IsMobile() || $(window).width() < 500) {
  $('#processing-background').css("display", "none");
}