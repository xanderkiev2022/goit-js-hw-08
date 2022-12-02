                                                        // Коментрарі написані з навчальною метою
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);                      // Створюємо екземпляр класу Player
const STORAGE_KEY = 'videoplayer-current-time';         // Придумали ключ сховища

const onSaveTime = function (data) {                    // Зберігаємо в локальне сховище сек відтворення
  localStorage.setItem(STORAGE_KEY, +data.seconds);
  console.log('seconds: ' + data.seconds);
};

player.on('timeupdate', throttle(onSaveTime, 1000));    // Вішаємо слахача подій та запускаємо функцію збереження

const lastSavedTime = localStorage.getItem(STORAGE_KEY);
// console.log('lastSavedTime: ', lastSavedTime);
player.setCurrentTime(lastSavedTime);                   // Записуємо зі сховища сек де зупинилося відео

// Завдання

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player,
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate -
// оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде
// рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення 
// відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у 
// сховищі не частіше, ніж раз на секунду.
