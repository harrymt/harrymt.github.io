var mywindow=window.mywindow||{};var $window=$(window);var $document=$(document);var $wrapper=$("#wrapper");var $bio=$("#player-bio");var $moretrigger=$("#more-trigger a");var $more=$("#more");mywindow.moreOffset=100;mywindow.duration=800;$document.on("click","#more-trigger a",function(e){e.preventDefault();if($window.scrollTop()>=$more.offset().top-mywindow.moreOffset){$("html, body").animate({scrollTop:0},mywindow.duration)}else{$("html, body").animate({scrollTop:$more.offset().top-mywindow.moreOffset},mywindow.duration)}});$window.on("scroll",function(){if($window.scrollTop()>=$more.offset().top-mywindow.moreOffset){$moretrigger.html("Stop Seein<span>g</span>")}else{$moretrigger.html("See My Wor<span>k</span>")}});var $shots=$(".shots");var page=0;if($shots.length>1){$("#work").append('<a href="#" id="showmore">Show more</a>');$(document).on("click","#showmore",function(e){e.preventDefault();$shots.eq(++page).show();if(page===$shots.length-1){$("#showmore").remove()}})}

// chart
new Timesheet('timesheet', 2012, 2023, [
  ['09/2012', '07/2016', 'UoN CompSci BSc', 'ipsum'],
  ['2013', '2015', 'Freelance website designer', 'sit'],
  ['08/2014', '07/2015', '121 Systems', 'default']
]);

// Spotify now playing

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
