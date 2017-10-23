import RulesView from './rules-view';
import {renderPage} from '../../create-screen';
import {resetUserData, resetGameScreen, resetGameDataValues, Application} from '../../service';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    renderPage(this.view.element);

    this.view.onBackButtonClick = () => {
      resetUserData();
      resetGameDataValues();
      resetGameScreen();
      Application.showGreeting();
    };

    this.view.onNameFieldInput = (evt, submitRules) => {
      submitRules.disabled = (!evt.target.value);
    };

    this.view.onFormSubmit = (evt) => {
      evt.preventDefault();
      Application.getNextLevel();
    };
  }
}
export default new RulesScreen();