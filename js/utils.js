'use strict';

window.isActivationEvent = (function () {
  var ENTER_KEY_CODE = 13;
  return function (evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  };
})();
window.utils = (function () {
  var fillElement = function (element, color) {
    element.style.fill = color;
    var changeColor = color;
    colorFunc(changeColor);
  };
  
  var colorFunc = function (change) {
    var changeColor = change;
    return changeColor;
  };
  
  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };
  return {
    colorFunc: colorFunc(),
    fillElement: fillElement,
    changeElementBackground: changeElementBackground
  };
})();
