import header from './game-header';
import AbstractView from '../abstract-view';
import resizeImages from './resize-images';

class GameOneView extends AbstractView {
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
    <form class="game__content">
      <div class="game__option">
        <img src="${this.data.answers[0].image.url}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${this.data.answers[1].image.url}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="painting">
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
