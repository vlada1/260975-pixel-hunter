const gameScreens = document.querySelectorAll(`template`);
const mainElement = document.querySelector(`main`);
const RIGHT_ARROW_KEYKODE = 39;
const LEFT_ARROW_KEYKODE = 37;
let currentScreen = 1;

const clearMainPage = () => {
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
};

const showScreenByNumber = (page) => {
  clearMainPage();
  return mainElement.appendChild(gameScreens[page - 1].content.cloneNode(true));
};

showScreenByNumber(currentScreen);

addEventListener(`keydown`, function (event) {
  if (currentScreen > 1) {
    if (event.keyCode === LEFT_ARROW_KEYKODE && event.altKey) {
      currentScreen--;
      showScreenByNumber(currentScreen);
    }
  }

  if (currentScreen < gameScreens.length) {
    if (event.keyCode === RIGHT_ARROW_KEYKODE && event.altKey) {
      currentScreen++;
      showScreenByNumber(currentScreen);
    }
  }
});
