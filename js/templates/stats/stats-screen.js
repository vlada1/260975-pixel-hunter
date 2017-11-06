import StatsView from './stats-view';
import {renderPage} from '../../create-screen';
import Loader from '../../loader';
import AppController from '../../service';
import Application from '../../application';

class StatsScreen {

  async init(name) {
    this.data = await Loader.loadResults(name);
    this.view = new StatsView(this.data);
    renderPage(this.view.element);

    this.view.onBackButtonClicked = () => {
      AppController.resetUserData();
      Application.resetGameDataValues();
      AppController.resetGameScreen();
      Application.showGreeting();
    };
  }
}

export default new StatsScreen();
