import GameTwoView from './game2-view';
import {renderPage} from '../../create-screen';
import Timer from '../../components/timer';
import AppController from '../../service';
import Application from '../../application';

class GameTwoScreen {

  init(data, statsData, callback) {
    this.view = new GameTwoView(data, statsData, callback);
    this.timer = new Timer(statsData.timer);
    renderPage(this.view.element);
    this.timer.start(this.view.element.querySelector(`.game__timer`), Application.timerCallback);

    this.view.onBackButtonClick = () => {
      const isConfirm = confirm(`Результат игры не сохраняется! Согласны?`);
      if (isConfirm) {
        this.timer.stop();
        AppController.resetUserData();
        Application.resetGameDataValues();
        AppController.resetGameScreen();
        Application.showGreeting();
      }
    };

    this.view.onAnswerClick = (userAnswer) => {
      const {answer} = userAnswer;
      if (data.answers[0].type === answer) {
        AppController.getStats(this.timer.getTime());
      } else {
        AppController.changeLive();
      }
      this.timer.stop();
      Application.getNextLevel();
    };
  }
}
export default new GameTwoScreen();
