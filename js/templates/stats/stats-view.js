import header from '../header.js';
import {Points, countResult} from '../../components/game-params.js';
import AbstractView from '../abstract-view';

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get reversedData() {
    return this.data.slice(0).reverse();
  }

  get result() {
    return this.reversedData.map(function (round) {
      return countResult(round);
    });
  }

  get template() {
    return `\
      ${header}
      <div class="result">
        ${this.result.map((round, index) => !round.isWin ? this.loseStats(this.reversedData[index], index + 1) : this.winStats(this.reversedData[index], round, index + 1)).join(``)}
      </div>`;
  }

  winStats(statsData, result, index) {
    return `\
      <h1>Победа!</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">${index}.</td>
          <td colspan="2">
            <ul class="stats">
              ${statsData.stats.map((stats) =>`\
              <li class="stats__result stats__result--${stats}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;${Points.CORRECT}</td>
          <td class="result__total">${result.isCorrect * Points.CORRECT}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${result.fastBonuses}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${Points.BONUS}</td>
          <td class="result__total">${result.fastBonuses * Points.BONUS}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${result.livesBonuses}&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;${Points.BONUS}</td>
          <td class="result__total">${result.livesBonuses * Points.BONUS}</td>
        </tr>

        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${result.slowFine}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${Points.FINE}</td>
          <td class="result__total">${result.slowFine * Points.FINE}</td>
        </tr>

        <tr>
          <td colspan="5" class="result__total  result__total--final">${result.totalPoints}</td>
        </tr>
      </table>`;
  }

  loseStats(statsData, index) {
    return `\
      <h1>FAIL</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">${index}.</td>
          <td colspan="2">
            <ul class="stats">
              ${statsData.stats.map((stats) =>`\
              <li class="stats__result stats__result--${stats}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points"></td>
          <td class="result__total">FAIL</td>
        </tr>
      </table>`;

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
