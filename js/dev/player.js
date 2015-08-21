
//
// Spotify now playing
//

function IsMobile() {
 return ( navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/iPad/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/BlackBerry/i) ||
     navigator.userAgent.match(/Windows Phone/i)
 );
}

$(function() {
    if(!IsMobile()) {
        DisplaySpotify();
    }
});

function DisplaySpotify() {
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=harrymf&api_key=7b853a347df8cfe29314dcd7b73444cb&format=json', function(data) {

        if (data.recenttracks !== undefined) {
            var nowplaying = data.recenttracks.track[0];
            var artistAndSong = nowplaying.name + " - " + nowplaying.artist["#text"];
            var url = data.recenttracks.track[0].url;
            $('.js-nowplaying').text(artistAndSong);
            $('.js-spotify').find('.js-nowplaying-url').attr("href", url);
    		    $('.js-spotify').css("display", "block");
        } else {
            $('.js-spotify').hide();
        }
    });
}

//
// Happy {Day of week}
//
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[(new Date()).getDay()];
$('#today-date').text(day);


//
// Set copyright to always be this year
//
$('#js-date-now').text(new Date().getFullYear());

// Smooth scrolling to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });
});
