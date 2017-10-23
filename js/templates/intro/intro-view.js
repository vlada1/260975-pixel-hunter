import AbstractView from '../abstractView';

class IntroView extends AbstractView {
  get template() {
    return `\
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>`;
  }

  bind() {
    const introElement = this.element;
    const introAsterisk = introElement.querySelector(`.intro__asterisk`);

    introAsterisk.addEventListener(`click`, () => {
      this.onNextButtonClick();
    });
  }
  onNextButtonClick() {

  }
}

export default IntroView;
