import {createDomElement, renderPage} from '../../create-screen.js';
import rulesElement from '../rules/rules.js';
import rulesData from '../rules/rules-data.js';


const content = (data) => `\
  <div class="greeting central--blur">
    <div class="greeting__logo"><img src="${data.logo.src}" width="201" height="89" alt="${data.logo.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

export default (data) => {
  const greetingTemplate = `\
  ${content(data)}`;

  const greetingElement = createDomElement(greetingTemplate);
  const nextPage = greetingElement.querySelector(`.greeting__continue`);

  nextPage.addEventListener(`click`, () => {
    rulesElement(rulesData);
  });

  renderPage(greetingElement);
  return greetingElement;
};
