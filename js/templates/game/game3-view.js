import AbstractView from '../abstractView';
import header from './game-header.js';

class GameThreeView extends AbstractView {
  constructor(data, statsdata, callback) {
    super();
    this.data = data;
    this.statsdata = statsdata;
    this.callback = callback;
  }

  get template() {
    return `\
    ${header(this.callback)}
    <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${this.data.answers[0].src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.data.answers[1].src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.data.answers[2].src}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${this.statsdata.stats.map((result) =>`\
        <li class="stats__result stats__result--${result}"></li>`).join(``)}
      </ul>
    </div>
    </div>`;
  }

  bind() {
    const gameElement = this.element;
    const backToIntro = gameElement.querySelector(`.back`);
    const gameContent = gameElement.querySelector(`.game__content`);
    const gameOptionArr = gameContent.querySelectorAll(`.game__option`);

    backToIntro.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    gameContent.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`game__option`)) {
        (evt.target.classList.add(`game__option--selected`));

        for (let i = 0; i < gameOptionArr.length; i++) {
          if (gameOptionArr[i].classList.contains(`game__option--selected`)) {
            let answer = this.data.answers[i].type;
            this.onAnswerClick({answer});
          }
        }
      }
    });
  }

  onBackButtonClick() {

  }

  onAnswerClick() {

  }
}
export default GameThreeView;
