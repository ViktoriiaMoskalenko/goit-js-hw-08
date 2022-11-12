import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let i = Number(localStorage.getItem('videoplayer-current-time')) || 0;

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds),
      console.log(event.seconds)
    );
  }, 1000)
);

player.setCurrentTime(i);
