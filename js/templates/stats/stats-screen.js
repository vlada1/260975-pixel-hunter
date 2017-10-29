import StatsView from './stats-view';
import {renderPage} from '../../create-screen';
import {resetUserData, resetGameScreen, Application} from '../../service';

class StatsScreen {

  init(data) {
    this.view = new StatsView(data);
    renderPage(this.view.element);

    this.view.onBackButtonClicked = () => {
      resetUserData();
      Application.resetGameDataValues();
      resetGameScreen();
      Application.showGreeting();
    };
  }
}

export default new StatsScreen();
