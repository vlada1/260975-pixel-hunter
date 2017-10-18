import {createDomElement, renderPage} from '../../create-screen.js';
import {resetUserData, resetGameScreen, resetGameDataValues} from '../../service.js';
import introElement from '../intro.js';
import header from '../header.js';
import {points, countResult} from '../../components/game-params.js';


const gameResults = (data) => {
  const round = countResult(data);

  const gameResultsTemplate = `\
    <h1>${round.isWin ? `Победа!` : `FAIL`}</h1>

    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${data.stats.map((stats) =>`\
            <li class="stats__result stats__result--${stats}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">${round.isWin ? `×&nbsp;` + points.CORRECT : ``}</td>
        <td class="result__total">${round.isWin ? round.isCorrect * points.CORRECT : `FAIL`}</td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${round.fastBonuses}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${points.BONUS}</td>
        <td class="result__total">${round.fastBonuses * points.BONUS}</td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${round.livesBonuses}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${points.BONUS}</td>
        <td class="result__total">${round.livesBonuses * points.BONUS}</td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${round.slowFine}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${points.FINE}</td>
        <td class="result__total">${round.slowFine * points.FINE}</td>
      </tr>

      <tr>
        <td colspan="5" class="result__total  result__total--final">${round.totalPoints}</td>
      </tr>
    </table>`;

  return gameResultsTemplate;
};

export default (data) => {
  const statsTemplate = `\
    ${header}
    <div class="result">
      ${gameResults(data)}
    </div>`;

  const statsElement = createDomElement(statsTemplate);
  const backToIntro = statsElement.querySelector(`.back`);

  backToIntro.addEventListener(`click`, () => {
    resetUserData();
    resetGameDataValues();
    resetGameScreen();
    renderPage(introElement);
  });

  renderPage(statsElement);
  return statsElement;
};
