import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_NAME = 'videoplayer-current-time';
const UPDATE_TIME = 1000;
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

checkLocalStorage();

player.on('timeupdate', throttle(timeUpdateHandler, UPDATE_TIME));

function checkLocalStorage() {

const seconds = localStorage.getItem(KEY_NAME);

if (seconds) {
    player.setCurrentTime(seconds);
}
}

function timeUpdateHandler(data) {
   localStorage.setItem(KEY_NAME, data.seconds);
}