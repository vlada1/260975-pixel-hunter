import {createDomElement, renderPage} from './service.js';
import gameTypeOne from './game-1.js';
import introElement from './intro.js';

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
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const rulesElement = createDomElement(rulesTemplate);
const backToIntro = rulesElement.querySelector(`.back`);
const nameField = rulesElement.querySelector(`.rules__input`);
const submitRules = rulesElement.querySelector(`.rules__button`);

backToIntro.onclick = () => {
  renderPage(introElement);
};

nameField.oninput = (evt) => {
  submitRules.disabled = (evt.target.value) ? false : true;
};

submitRules.onclick = (evt) => {
  evt.preventDefault();
  renderPage(gameTypeOne);
};

export default rulesElement;
