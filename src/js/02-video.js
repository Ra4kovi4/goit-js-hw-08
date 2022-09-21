import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onSaveTimePlayer, 1000));

function onSaveTimePlayer(evt) {
  const playerTime = evt.seconds;
  localStorage.setItem(STORAGE_KEY, playerTime);
  console.log('played the video!');
}

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
