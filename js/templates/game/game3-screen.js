import GameThreeView from './game3-view';
import {renderPage} from '../../create-screen';
import {changeLive, getStats, resetUserData, resetGameScreen, resetGameDataValues, timerCallback, Application} from '../../service';
import Timer from '../../components/timer';

class GameThreeScreen {

  init(data, statsdata, callback) {
    this.view = new GameThreeView(data, statsdata, callback);
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
      const {answer} = userAnswer;
      if (answer === `paint`) {
        this.timer.stop();
        getStats(this.timer.getTime());
      } else {
        this.timer.stop();
        changeLive();
      }
      Application.getNextLevel();
    };
  }
}

export default new GameThreeScreen();
