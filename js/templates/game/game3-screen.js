import GameThreeView from './game3-view';
import {renderPage} from '../../create-screen';
import {changeLive, getStats, resetUserData, resetGameScreen, timerCallback, Application} from '../../service';
import Timer from '../../components/timer';

class GameThreeScreen {

  init(data, statsdata, callback) {
    this.view = new GameThreeView(data, statsdata, callback);
    this.timer = new Timer(statsdata.timer);
    renderPage(this.view.element);
    this.timer.start(this.view.element.querySelector(`.game__timer`), timerCallback);

    this.view.onBackButtonClick = () => {
      this.timer.stop();
      resetUserData();
      Application.resetGameDataValues();
      resetGameScreen();
      Application.showGreeting();
    };

    this.view.onAnswerClick = (userAnswer) => {
      const {answer} = userAnswer;
      if (answer === `painting`) {
        getStats(this.timer.getTime());
      } else {
        changeLive();
      }
      this.timer.stop();
      Application.getNextLevel();
    };
  }
}

export default new GameThreeScreen();
