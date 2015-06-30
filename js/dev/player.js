
//
// Scrolling portfolio pieces
//
var $pieces = $(".pieces");
var page = 0;
if ($pieces.length > 1) {
    $("#work").append('<a href="#" id="showmore">Show more</a>');
    $(document).on("click", "#showmore", function(e) {
        e.preventDefault();
        $pieces.eq(++page).show();
        if (page === $pieces.length - 1) {
            $("#showmore").remove()
        }
    })
}


//
// Spotify now playing
//
$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=harrymf&api_key=7b853a347df8cfe29314dcd7b73444cb&format=json', function(data) {

    if (data.recenttracks !== undefined) {
        var nowplaying = data.recenttracks.track[0];
        var artistAndSong = nowplaying.name + " - " + nowplaying.artist["#text"];
        var url = data.recenttracks.track[0].url;
        $('#js-nowplaying').text(artistAndSong);
        $('#spotify').find('#js-nowplaying-url').attr("href", url);
		    $('#spotify').css("display", "block");
    } else {
        $('#spotify').hide();
    }
});
