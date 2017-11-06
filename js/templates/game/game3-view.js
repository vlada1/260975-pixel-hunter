import AbstractView from '../abstract-view';
import header from './game-header.js';
import resizeImages from './resize-images';

class GameThreeView extends AbstractView {
  constructor(data, statsData, callback) {
    super();
    this.data = data;
    this.statsData = statsData;
    this.callback = callback;
  }

  get template() {
    return `\
    ${header(this.callback)}
    <div class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${this.data.answers[0].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.data.answers[1].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.data.answers[2].image.url}" alt="Option 1" width="304" height="455">
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
    const gameOptionArr = gameContent.querySelectorAll(`.game__option`);

    backToIntro.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    gameOptionArr.forEach((option, i) => {
      option.addEventListener(`click`, () => {
        const answer = this.data.answers[i].type;
        const questionType = this.data.question === `Найдите фото среди изображений` ? `photo` : `painting`;
        this.onAnswerClick({answer, questionType});
      });
    }, this);
  }

  onBackButtonClick() {

  }

  onAnswerClick() {

  }
}
export default GameThreeView;
