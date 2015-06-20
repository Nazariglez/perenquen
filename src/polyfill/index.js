require('../../lib/pixi/src/polyfill');

//Vibrate
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate || null;