'use strict';

window.utils = (function () {
  var fillElement = function (element, color) {
    element.style.fill = color;
  };
  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };
  return {
    fillElement: fillElement,
    changeElementBackground: changeElementBackground
  };
})();
window.isCreateHeroes = (function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarVizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'grenn'];
  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var renderWizard = function (wizard) {
    var wizardElement = similarVizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    // определяем сколько волшебников нам сервер может передать
    var numberWizards = Object.keys(wizards).length;
    var min = 0;
    var max = numberWizards - 4;
    // определяем, с какого по счету  мага добавятсья еще 3 мага
    var randomNumber = Math.round(Math.random() * (max - min) + min);
    for (var i = randomNumber; i < randomNumber + 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
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
  return {
    arrayColorCoat: wizardCoatColors,
    arrayColorEye: wizardEyesColors,
    arrayColorFireball: wizardFireballColors,
  };
})();
