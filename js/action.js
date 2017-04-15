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
  var username = document.querySelector('.setup-user-name');
  username.required = true;
  username.maxlength = 50;
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.isCreateHeroes.coatColor(window.isCreateHeroes.arrayColorCoat);
  });
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.isCreateHeroes.eyeColor(window.isCreateHeroes.arrayColorEye);
  });
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = window.isCreateHeroes.fireballColor(window.isCreateHeroes.arrayColorFireball);
  });
})();
