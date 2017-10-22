import StatsView from './stats-view';
import {renderPage} from '../../create-screen';
import {resetUserData, resetGameScreen, resetGameDataValues, Application} from '../../service';

class StatsScreen {

  init(data) {
    this.view = new StatsView(data);
    renderPage(this.view.element);

    this.view.onBackButtonClicked = () => {
      resetUserData();
      resetGameDataValues();
      resetGameScreen();
      Application.showIntro();
    };
  }
}

export default new StatsScreen();
