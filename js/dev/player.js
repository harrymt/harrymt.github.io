
//
// Spotify now playing
//
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
