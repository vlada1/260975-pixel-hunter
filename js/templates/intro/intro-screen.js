import IntroView from './intro-view';
import {renderPage} from '../../create-screen';
import Application from '../../application';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    renderPage(this.view.element);
    this.view.onNextButtonClick = () => {
      Application.showGreeting();
    };
  }
}
export default new IntroScreen();
