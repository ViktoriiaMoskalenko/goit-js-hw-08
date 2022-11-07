import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let i = Number(localStorage.getItem('videoplayer-current-time')) || 0;

// player.on(
//   'timeupdate',
//   throttle(function (event) {
//     i += 1;
//     localStorage.setItem('videoplayer-current-time', i - 1);
//     console.log(event.setcurrentTime);
//   }, 1000)
// );

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);

player
  .setCurrentTime(i)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
