import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');    // Шукаємо iframe
const player = new Player(iframe);                  // створюємо екземпляр класу Плеєр

console.log('iframe:', iframe);

console.log('player:', player);



// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
// console.log('onPlay:', onPlay);

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
