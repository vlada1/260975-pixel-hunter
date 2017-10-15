import {createDomElement, renderPage} from '../service.js';
import greetingElement from './greeting/greeting.js';

const introTemplate = `\
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>`;

const introElement = createDomElement(introTemplate);
const introAsterisk = introElement.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, () => {
  renderPage(greetingElement);
});

export default introElement;
