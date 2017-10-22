import GameOneView from './game1-view';
import {renderPage} from '../../create-screen';
import {changeLive, getStats, resetUserData, resetGameScreen, resetGameDataValues, timerCallback, Application} from '../../service';
import Timer from '../../components/timer';

class GameOneScreen {

  init(data, statsdata, callback) {
    this.view = new GameOneView(data, statsdata, callback);
    this.timer = new Timer(statsdata.timer, this.view.element.querySelector(`.game__timer`), timerCallback);
    renderPage(this.view.element);
    this.timer.start();

    this.view.onBackButtonClick = () => {
      this.timer.stop();
      resetUserData();
      resetGameDataValues();
      resetGameScreen();
      Application.showGreeting();
    };

    this.view.onAnswerClick = (userAnswer) => {
      const {answer1, answer2} = userAnswer;
      if (answer1 && answer2) {

        if ((data.answers[0].type === answer1)
          && (data.answers[1].type === answer2)) {
          this.timer.stop();
          getStats(this.timer.getTime());
        } else {
          this.timer.stop();
          changeLive();
        }
        Application.getNextLevel();
      }
    };
  }
}
export default new GameOneScreen();
