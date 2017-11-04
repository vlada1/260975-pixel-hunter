import GameOneView from './game1-view';
import {renderPage} from '../../create-screen';
import {changeLive, getStats, resetUserData, resetGameScreen, timerCallback, Application} from '../../service';
import Timer from '../../components/timer';

class GameOneScreen {

  init(data, statsdata, callback) {
    this.view = new GameOneView(data, statsdata, callback);
    this.timer = new Timer(statsdata.timer);
    renderPage(this.view.element);
    this.timer.start(this.view.element.querySelector(`.game__timer`), timerCallback);

    this.view.onBackButtonClick = () => {
      const isConfirm = confirm(`Результат игры не сохраняется! Согласны?`);
      if (isConfirm) {
        this.timer.stop();
        resetUserData();
        Application.resetGameDataValues();
        resetGameScreen();
        Application.showGreeting();
      }
    };

    this.view.onAnswerClick = (userAnswer) => {
      const {answer1, answer2} = userAnswer;
      if (answer1 && answer2) {

        if ((data.answers[0].type === answer1)
          && (data.answers[1].type === answer2)) {
          getStats(this.timer.getTime());
        } else {
          changeLive();
        }
        this.timer.stop();
        Application.getNextLevel();
      }
    };
  }
}
export default new GameOneScreen();
