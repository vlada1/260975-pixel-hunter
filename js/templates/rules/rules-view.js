import AbstractView from '../abstractView';
import header from '../header.js';
import data from './rules-data';

class RulesView extends AbstractView {
  get template() {
    return `\
      ${header}
      <div class="rules">
        <h1 class="rules__title">${data.title}</h1>
        <p class="rules__description">${data.text}</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="${data.placeholder}">
          <button class="rules__button  continue" type="submit" disabled>${data.buttonText}</button>
        </form>
      </div>`;
  }

  bind() {
    const rulesElement = this.element;
    const backToIntro = rulesElement.querySelector(`.back`);
    const nameField = rulesElement.querySelector(`.rules__input`);
    const submitRules = rulesElement.querySelector(`.rules__button`);

    backToIntro.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    nameField.addEventListener(`input`, (evt) => {
      this.onNameFieldInput(evt, submitRules);
    });

    submitRules.addEventListener(`click`, (evt) => {
      this.onFormSubmit(evt, nameField);
    });
  }

  onBackButtonClick() {

  }

  onNameFieldInput() {

  }

  onFormSubmit() {

  }
}
export default RulesView;
