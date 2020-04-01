
// Add active class to the current control button (play video)

var playBtnVideo = document.getElementById('play-btn');
playBtnVideo.addEventListener("click", addClassForPlay);

function addClassForPlay() {
    var element, name, arr;
    element = document.getElementById('ytplayer');
    element.classList.add('play-video');

    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '705',
        width: '100%',
        videoId: '1yVF-N__JKk?autoplay=1&?color=white',
    });
}
