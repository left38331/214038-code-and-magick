'use strict';

// открывание и закрываниеокна мага по кликам и нажатиям клавиш
(function () {
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
    if (window.isActivationEvent(evt)) {
      openPopup();
    }
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (window.isActivationEvent(evt)) {
      closePopup();
    }
  });
  document.querySelector('.setup-user-name').addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });
})();
// изменение цвета плаща, глаз и файербола при нажатии на эти вещи
(function () {
  var coatColor = window.utils.colorFunc;
  var eyesColor = 'red';
  var wizards = [];
//  console.log(wizards);
  var updateWizards = function () {
    var sameCoatWizards = wizards.filter(function(it) {
      return it.colorCoat === coatColor;
    });
    
    window.render(sameCoatWizards);
  };
  var wizardCoatColors = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var wizardEyesColors = [ 'red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var username = document.querySelector('.setup-user-name');
  username.required = true;
  username.maxlength = 50;
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var aaa;
  wizardCoat.addEventListener('click', function () {
    window.coloriseElement(wizardCoat, wizardCoatColors, window.utils.fillElement);
    updateWizards();
  });
  
  wizardEyes.addEventListener('click', function () {
    window.coloriseElement(wizardEyes, wizardEyesColors, window.utils.fillElement);
    updateWizards();
  });
  wizardFireball.addEventListener('click', function () {
    window.coloriseElement(wizardFireball, wizardFireballColors, window.utils.changeElementBackground);
  });
  
  
  
  
  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.load(successHandler, errorHandler);
})();
