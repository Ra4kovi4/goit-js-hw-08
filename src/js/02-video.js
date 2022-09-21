import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onSaveTimePlayer, 1000));

function onSaveTimePlayer(evt) {
  const playerTime = evt.seconds;
  localStorage.setItem(STORAGE_KEY, playerTime);
}
const savedTimeVideo = localStorage.getItem(STORAGE_KEY);

if (savedTimeVideo) {
  player.setCurrentTime(savedTimeVideo);
}
