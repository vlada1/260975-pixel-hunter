import {createDomElement, renderPage} from './service.js';
import gameTypeOne from './game-1.js';
import introElement from './intro.js';

const data = dataUnited.rulesData;

const rulesTemplate = `\
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${data.buttonText}</button>
    </form>
  </div>`;

const rulesElement = createDomElement(rulesTemplate);
const backToIntro = rulesElement.querySelector(`.back`);
const nameField = rulesElement.querySelector(`.rules__input`);
const submitRules = rulesElement.querySelector(`.rules__button`);

backToIntro.addEventListener(`click`, () => {
  renderPage(introElement);
});

nameField.addEventListener(`input`, (evt) => {
  submitRules.disabled = (evt.target.value) ? false : true;
});

submitRules.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderPage(gameTypeOne);
});

export default rulesElement;
