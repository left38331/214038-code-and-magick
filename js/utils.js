'use strict';

window.isActivationEvent = (function () {
  var ENTER_KEY_CODE = 13;
  return function (evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  };
})();
