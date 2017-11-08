import RulesView from './rules-view';
import {renderPage} from '../../create-screen';
import AppController from '../../service';
import Application from '../../application';


class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    renderPage(this.view.element);

    this.view.onBackButtonClick = () => {
      AppController.resetUserData();
      Application.resetGameDataValues();
      AppController.resetGameScreen();
      Application.showGreeting();
    };

    this.view.onNameFieldInput = (name) => {
      this.name = name;
    };

    this.view.onFormSubmit = (evt) => {
      evt.preventDefault();
      AppController.changeName(this.name);
      Application.getNextLevel();
    };
  }
}
export default new RulesScreen();
