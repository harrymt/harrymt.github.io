//
// main.js
//

/**
 * Click handler for the asterisk. Flashes the footnote on click.
 */
$('.js-footnote').on('click', function() {
  $('#footnote').parent().fadeOut(300).fadeIn(300);
});

$('.js-reload-page').on('click', function() {
  $(this).addClass('fa-spin');

  setTimeout(function() {
    window.location = window.location;
  }, 500);
});


$(window).load(function() {
  setLoadTimeStats();

  var pages = window.location.pathname.split("/");
  var current_page = pages[pages.length - 1];

  if(current_page == "about.html") {
    window.setInterval(function() {
      var now = new Date();
      setAgeCounter(new Date());
    }, 1000);
  }


});

/**
 * Display the loadtime stat
 */
function setLoadTimeStats() {
  var loadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;
  $('.js-stats-loadtime').text(loadTime);
}

/**
 * Check to see if the user is on a mobile device.
 *
 * @return bool True if they are, false if not.
 */
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

var dob = new Date(1993, 11, 16);

function setAgeCounter(now) {
  var duration = now - dob;
  var years = duration / 31556900000;
  var majorMinor = years.toFixed(7).toString().split('.');

  $('.js-age-major').text(majorMinor[0]);
  $('.js-age-minor').text(majorMinor[1]);
}