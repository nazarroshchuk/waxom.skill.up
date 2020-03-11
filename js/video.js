

// Add active class to the current control button (play video)

let playBtnVideo = document.getElementById('play-btn');
playBtnVideo.addEventListener("click", addClassForPlay);

function addClassForPlay() {
    let element, name, arr;
    element = document.getElementById('ytplayer');
    name = "play-video";
    arr = element.className.split(" ");
    if (arr.indexOf(name) === -1) {
        element.className += name;
    }
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
