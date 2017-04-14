'use strict';

window.isClickOrPressKey = (function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var onEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (isActivationEvent(evt)) {
      openPopup();
    }
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (isActivationEvent(evt)) {
      closePopup();
    }
  });
  document.querySelector('.setup-user-name').addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });
});
window.isClickOnVizard = (function () {
  var username = document.querySelector('.setup-user-name');
  username.required = true;
  username.maxlength = 50;
  var getRandomColorFromSet = function (set) {
    var randomEleventIndex = Math.floor(Math.random() * set.length - 1);
    return set[randomEleventIndex];
  };
  var getRandomColorFromSetEye = function (setEyes) {
    var randomEleventIndex = Math.floor(Math.random() * setEyes.length - 1);
    return setEyes[randomEleventIndex];
  };
  var getRandomColorFromSetFireball = function (setFireball) {
    var randomEleventIndex = Math.floor(Math.random() * setFireball.length - 1);
    return setFireball[randomEleventIndex];
  };
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'grenn'];
  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRandomColorFromSet(wizardCoatColors);
  });
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRandomColorFromSetEye(wizardEyesColors);
  });
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = getRandomColorFromSetFireball(wizardFireballColors);
  });
});
