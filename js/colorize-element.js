'use strict';

window.coloriseElement = (function(element, colors, callback) {
  element.addEventListener('click', function() {
    // Возвращает рандомный элемет массива
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    callback(element, randomColor);
  });
});
