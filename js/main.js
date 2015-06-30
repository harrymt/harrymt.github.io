
var mywindow = window.mywindow || {};
var $window = $(window);
var $document = $(document);
var $wrapper = $("#wrapper");
var $bio = $("#player-bio");
var $moretrigger = $("#more-trigger a");
var $more = $("#more");
mywindow.moreOffset = 100;
mywindow.duration = 800;
$document.on("click", "#more-trigger a", function(e) {
    e.preventDefault();
    if ($window.scrollTop() >= $more.offset().top - mywindow.moreOffset) {
        $("html, body").animate({
            scrollTop: 0
        }, mywindow.duration)
    } else {
        $("html, body").animate({
            scrollTop: $more.offset().top - mywindow.moreOffset
        }, mywindow.duration)
    }
});
$window.on("scroll", function() {
    if ($window.scrollTop() >= $more.offset().top - mywindow.moreOffset) {
        $moretrigger.html("Stop Seein<span>g</span>")
    } else {
        $moretrigger.html("See My Wor<span>k</span>")
    }
});
var $shots = $(".shots");
var page = 0;
if ($shots.length > 1) {
    $("#work").append('<a href="#" id="showmore">Show more</a>');
    $(document).on("click", "#showmore", function(e) {
        e.preventDefault();
        $shots.eq(++page).show();
        if (page === $shots.length - 1) {
            $("#showmore").remove()
        }
    })
}

// @codekit-prepend "dev/jquery.min.js";

// @codekit-prepend "dev/googleA.js";

// @codekit-prepend "dev/player.js";
