'use strict';

var similarListElement = document.querySelector('.setup-similar-list');
var similarVizardTemplate = document.querySelector('#similar-wizard-template').content;
var randomFuncName = function () {
  var firstName = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var randomFirstName = Math.floor(Math.random() * firstName.length);
  var randomLastName = Math.floor(Math.random() * lastName.length);
  var randomFirstNameString = firstName[randomFirstName];
  var randomLastNameString = lastName[randomLastName];
  var fullName = randomFirstNameString + randomLastNameString;
  return fullName;
};
var randomFuncColor = function () {
  var colorJacket = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var randomColorJacket = Math.floor(Math.random() * colorJacket.length);
  var selectedColorJacket = colorJacket[randomColorJacket];
  return selectedColorJacket;
};
var randomFuncOptic = function () {
  var colorOptic = ['black', 'red', 'blue', 'yellow', 'green'];
  var randomColorOptic = Math.floor(Math.random() * colorOptic.length);
  var selectedColorOptic = colorOptic[randomColorOptic];
  return selectedColorOptic;
};
var randomArr = [
  {name: randomFuncName(), coatColor: randomFuncColor(), eyesColor: randomFuncOptic()},
  {name: randomFuncName(), coatColor: randomFuncColor(), eyesColor: randomFuncOptic()},
  {name: randomFuncName(), coatColor: randomFuncColor(), eyesColor: randomFuncOptic()},
  {name: randomFuncName(), coatColor: randomFuncColor(), eyesColor: randomFuncOptic()}
];
var renderWizard = function (wizard) {
  var wizardElement = similarVizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var createFunc = function () {
  var i;
  var fragment = document.createDocumentFragment();
  for (i = 0; i < randomArr.length; i++) {
    fragment.appendChild(renderWizard(randomArr[i]));
  }
  similarListElement.appendChild(fragment);
};
createFunc();
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
var ENTER_KEY_CODE = 13;
var isActivationEvent = function (evt) {
  return evt.keyCode === ENTER_KEY_CODE;
};
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
var username = setup.querySelector('.setup-user-name');
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
