import {createDomElement, renderPage, getNextLevel} from '../../service.js';
import introElement from '../intro.js';
import header from '../header.js';
import data from './rules-data.js';

const rulesTemplate = `\
  ${header}
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
  getNextLevel()();
});

export default rulesElement;
