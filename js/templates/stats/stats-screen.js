import StatsView from './stats-view';
import {renderPage} from '../../create-screen';
import Loader from '../../loader';
import {resetUserData, resetGameScreen, Application} from '../../service';

class StatsScreen {

  async init(name) {
    this.data = await Loader.loadResults(name);
    this.view = new StatsView(this.data);
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
