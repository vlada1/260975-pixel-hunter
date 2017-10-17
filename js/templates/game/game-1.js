import {createDomElement, renderPage} from '../../create-screen.js';
import {getNextLevel, changeLive, getStats, resetUserData, resetGameScreen, resetGameDataValues} from '../../service.js';
import header from './game-header.js';
import introElement from '../intro.js';

const content = (data) => `\
  <p class="game__task">${data.text}</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${data.answers[0].src}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${data.answers[1].src}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
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
  ${header(callback)}
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
    renderPage(introElement);
  });

  let answer1;
  let answer2;

  gameContent.addEventListener(`click`, (evt) => {
    if (evt.target.checked) {

      if (evt.target.name === `question1`) {
        answer1 = evt.target.value;

      } else if (evt.target.name === `question2`) {
        answer2 = evt.target.value;
      }

      if (answer1 && answer2) {

        if ((data.answers[0].type === answer1)
          && (data.answers[1].type === answer2)) {
          getStats();
        } else {
          changeLive();
        }
        getNextLevel();
      }
    }
  });

  renderPage(gameElement);
  return gameElement;
};
