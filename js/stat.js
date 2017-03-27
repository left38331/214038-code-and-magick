'use strict';

window.renderStatistics = function(ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);
	
	ctx.fillStyle = 'white';
	ctx.strokeRect(100, 10, 420, 270);
	ctx.fillRect(100, 10, 420, 270);
	
	ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 60);
	
	var max = -1;
	var maxIndex = -1;
	
	for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
			maxIndex = i;
    }
  }
  
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  
	ctx.save();
	ctx.translate(460,240);
	ctx.rotate(180*Math.PI/180);
	
	var barWidth = 40;
	var indent = 50;
	var initialX = 0;
	var initialY = 275; 
	var initialYHistogram = -20;
	var initialYTimes = 100; 
	
	for (var i = 0; i < times.length; i++) {
		var colorNames = function () {
			var randomNumber = Math.random();
			
			function getRandomArbitary(min, max) {
				var minim = 0;
				var maxim = 1;
				return Math.random() * (maxim - minim) + minim;
			}
			
			if (names[i] == 'Вы') {
				ctx.fillStyle = 'rgba(255, 0, 0, 1)';
			} else {
				ctx.fillStyle = 'rgba(17, 9, 255,' + randomNumber +' )';
			}
		}
		colorNames();
    ctx.fillRect((barWidth + indent) * i, initialYHistogram, barWidth, times[i] * step);
		
		//ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY);
		//ctx.fillText(Math.round(times[i]),  (barWidth + indent) * i, 160);
  }
	
	ctx.restore();
	ctx.save();
	ctx.translate(420,0);
	
	for(var i = 0; i < times.length; i++) {
    ctx.fillText(names[i], initialX - (barWidth + indent) * i, initialY);
		ctx.fillText(Math.round(times[i]), initialX - (barWidth + indent) * i, initialYTimes);
  }
	
	ctx.restore();
};