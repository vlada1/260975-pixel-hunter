import {createDomElement, renderPage, getNextLevel, changeLive, getStats, resetUserData, resetGameScreen, resetGameDataValues} from '../../service.js';
import header from './game-header.js';
import introElement from '../intro.js';

const content = (data) => `\
  <p class="game__task">${data.text}</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${data.answers[0].src}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${data.answers[1].src}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${data.answers[2].src}" alt="Option 1" width="304" height="455">
    </div>
  </form>`;

const stats = (statsdata) => `\
  <div class="stats">
    <ul class="stats">
      ${statsdata.stats.map((result) =>`\
      <li class="stats__result stats__result--${result}"></li>`).join(``)}
    </ul>
  </div>`;

export default (data, statsdata, callback) => {
  const gameTemplate = `\
  ${headerTemplate(callback)}
  <div class="game">
    ${content(data)}
    ${stats(statsdata)}
  </div>`;

  const gameElement = createDomElement(gameTemplate);
  const backToIntro = gameElement.querySelector(`.back`);
  const gameContent = gameElement.querySelector(`.game__content`);

  backToIntro.addEventListener(`click`, () => {
    resetUserData();
    resetGameDataValues();
    resetGameScreen();
  });

    let answer;

  gameContent.addEventListener(`click`, () => {
    getNextLevel()();
  });

  renderPage(gameElement);
  return gameElement;
};
