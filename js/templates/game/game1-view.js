import header from './game-header';
import AbstractView from '../abstractView';

class GameOneView extends AbstractView {
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
    <form class="game__content">
      <div class="game__option">
        <img src="${this.data.answers[0].src}" alt="Option 1" width="468" height="458">
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
        <img src="${this.data.answers[1].src}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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
    const firstAnswer = Array.from(gameContent.querySelectorAll(`input[name="question1"]`));
    const secondAnswer = Array.from(gameContent.querySelectorAll(`input[name="question2"]`));

    backToIntro.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    gameContent.addEventListener(`change`, () => {
      const isFirstAnswerChecked = firstAnswer.some((it) => it.checked);
      let answer1 = firstAnswer.find((it) => it.checked);
      const isSecondAnswerChecked = secondAnswer.some((it) => it.checked);
      let answer2 = secondAnswer.find((it) => it.checked);

      if (isFirstAnswerChecked && isSecondAnswerChecked) {
        answer1 = answer1.value;
        answer2 = answer2.value;
        this.onAnswerClick({answer1, answer2});
      }
    });
  }
  onBackButtonClick() {

  }
  onAnswerClick() {

  }
}
export default GameOneView;
