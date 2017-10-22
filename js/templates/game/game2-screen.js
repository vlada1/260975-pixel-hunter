import GameTwoView from './game2-view';
import {renderPage} from '../../create-screen';
import {changeLive, getStats, resetUserData, resetGameScreen, resetGameDataValues, timerCallback, Application} from '../../service';
import Timer from '../../components/timer';

class GameTwoScreen {

  init(data, statsdata, callback) {
    this.view = new GameTwoView(data, statsdata, callback);
    this.timer = new Timer(statsdata.timer);
    renderPage(this.view.element);
    this.timer.start(this.view.element.querySelector(`.game__timer`), timerCallback);

    this.view.onBackButtonClick = () => {
      this.timer.stop();
      resetUserData();
      resetGameDataValues();
      resetGameScreen();
      Application.showGreeting();
    };

    this.view.onAnswerClick = (userAnswer) => {
      const {answer} = userAnswer;
      if (data.answers[0].type === answer) {
        getStats(this.timer.getTime());
      } else {
        changeLive();
      }
      this.timer.stop();
      Application.getNextLevel();
    };
  }
}
export default new GameTwoScreen();
