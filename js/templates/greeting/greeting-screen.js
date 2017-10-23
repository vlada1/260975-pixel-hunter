import GreetingView from './greeting-view';
import {renderPage} from '../../create-screen';
import {Application} from '../../service';


class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    renderPage(this.view.element);
    this.view.onNextButtonClick = () => {
      Application.showRules();
    };
  }
}

export default new GreetingScreen();
