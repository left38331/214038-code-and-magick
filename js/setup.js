'use strict';

document.querySelector('.setup').classList.remove('hidden');
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
var renderWizard = function (randomArr) {
  var wizardElement = similarVizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = randomArr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomArr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomArr.eyesColor;
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
