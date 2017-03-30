'use strict';

window.renderStatistics = function (ctx, names, times) {
  var i;
  var max = 0;
  var maxTimeFunction = function () {   //функция записи времени и выбора макс времени
    if (times[i] > max) {
      max = times[i];
    }
  };
  var colorNames = function () {  //функция выбора цвета
    var minimum = 0.1;
    var maximum = 1;
    var randomNumber = Math.random() * (maximum - minimum) + minimum;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(17, 9, 255, ' + randomNumber + ' )';
    }
  };
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var histogramHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialXHistogram = 150;
  var initialY = 275;
  for (i = 0; i < times.length; i++) {       //нахождение максимального времени
    maxTimeFunction();
  }
  var step = histogramHeight / (max);        //определение шага
  for (i = 0; i < times.length; i++) {
    colorNames();
    ctx.fillRect((initialXHistogram + (barWidth + indent) * i), (260 - (times[i] * step)), barWidth, times[i] * step); //отрисовка гистограммы
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], (initialXHistogram + (barWidth + indent) * i), initialY);  //вывод имени
    ctx.fillText(Math.round(times[i]), (initialXHistogram + (barWidth + indent) * i), 250 - (times[i] * step));  //вывод времени
  }
};
