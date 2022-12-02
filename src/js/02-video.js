import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); // Шукаємо iframe
const player = new Player(iframe); // створюємо екземпляр класу Плеєр
const STORAGE_KEY = 'videoplayer-current-time'; // вводимо константу для зберігання ключа
const lastSavedTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', onTimedUpdate(data));

function onTimedUpdate(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

// setCurrentTime();

player
  .setCurrentTime(lastSavedTime)
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

// player.on('play', onPlay);

//

// player.setColor('#00adef').then(function(color) {
//     // color = #000000;
//     // the color that was set
// }).catch(function(error) {
//     // an error occurred setting the color
// });

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

//

// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// const savedTime = localStorage.getItem

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }
