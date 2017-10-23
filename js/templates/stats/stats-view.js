import header from '../header.js';
import {points, countResult} from '../../components/game-params.js';
import AbstractView from '../abstractView';

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
    this.round = countResult(this.data);
  }

  get stats() {
    return `\
      <h1>${this.round.isWin ? `Победа!` : `FAIL`}</h1>

      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${this.data.stats.map((stats) =>`\
              <li class="stats__result stats__result--${stats}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">${this.round.isWin ? `×&nbsp;` + points.CORRECT : ``}</td>
          <td class="result__total">${this.round.isWin ? this.round.isCorrect * points.CORRECT : `FAIL`}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.round.fastBonuses}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${points.BONUS}</td>
          <td class="result__total">${this.round.fastBonuses * points.BONUS}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.round.livesBonuses}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;${points.BONUS}</td>
          <td class="result__total">${this.round.livesBonuses * points.BONUS}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.round.slowFine}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${points.FINE}</td>
          <td class="result__total">${this.round.slowFine * points.FINE}</td>
        </tr>

        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.round.totalPoints}</td>
        </tr>
      </table>`;
  }

  get template() {
    return `\
      ${header}
      <div class="result">
        ${this.stats}
      </div>`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.onBackButtonClicked();
    });
  }

  onBackButtonClicked() {

  }
}
export default StatsView;
