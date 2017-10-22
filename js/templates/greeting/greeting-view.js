import AbstractView from '../abstractView';
import data from './greeting-data';

class GreetingView extends AbstractView {
  get template() {
    return `\
      <div class="greeting central--blur">
        <div class="greeting__logo"><img src="${data.logo.src}" width="201" height="89" alt="${data.logo.alt}"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
          <h3>${data.title}</h3>
          <p>${data.text}</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>`;
  }

  bind() {
    const greetingElement = this.element;
    const nextPage = greetingElement.querySelector(`.greeting__continue`);

    nextPage.addEventListener(`click`, () => {
      this.onNextButtonClick();
    });
  }

  onNextButtonClick() {

  }
}
export default GreetingView;
