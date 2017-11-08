import AbstractView from '../abstract-view';
import header from './game-header.js';
import resizeImages from './resize-images';

class GameTwoView extends AbstractView {
  constructor(data, statsData, callback) {
    super();
    this.data = data;
    this.statsData = statsData;
    this.callback = callback;
  }

  get timerElement() {
    return this.element.querySelector(`.game__timer`);
  }

  get template() {
    return `\
    ${header(this.callback)}
    <div class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.data.answers[0].image.url}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${this.statsData.stats.map((result) =>`\
        <li class="stats__result stats__result--${result}"></li>`).join(``)}
      </ul>
    </div>
    </div>`;
  }

  bind() {
    const gameElement = this.element;
    resizeImages(gameElement);

    const backToIntro = gameElement.querySelector(`.back`);
    const gameContent = gameElement.querySelector(`.game__content`);

    backToIntro.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    gameContent.addEventListener(`click`, (evt) => {
      let answer;
      if (evt.target.checked) {
        answer = evt.target.value;
      }
      if (answer) {
        this.onAnswerClick({answer});
      }
    });
  }

  onBackButtonClick() {

  }

  onAnswerClick() {

  }
}
export default GameTwoView;
