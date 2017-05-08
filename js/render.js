(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarVizardTemplate = document.querySelector('#similar-wizard-template').content;
  var renderWizard = function (wizard) {
    var wizardElement = similarVizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };
  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    // определяем сколько волшебников нам сервер может передать
//    var numberWizards = Object.keys(wizards).length;
//    var min = 0;
//    var max = numberWizards - 4;
//    // определяем, с какого по счету  мага добавятсья еще 3 мага
//    var randomNumber = Math.round(Math.random() * (max - min) + min);
    var randomNumber = data.length > 4 ? 4 : data.length;
    for (var i = 0; i < randomNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };
})();