const gameScreens = document.querySelectorAll(`template`);
const next = 39;
const prev = 37;
let currentScreen = 1;

let clearMainPage = () => {
  const mainElement = document.querySelector(`main`);
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
}

let showScreenByNumber = (page) => {
  clearMainPage();
  const mainElement = document.querySelector(`main`);
  return mainElement.appendChild(gameScreens[page - 1].content.cloneNode(true));
};

showScreenByNumber(1);

addEventListener(`keydown`, function (event) {
  if (currentScreen > 1) {
    if (event.keyCode === prev && event.altKey) {
      currentScreen--;
      showScreenByNumber(currentScreen);
    }
  }

  if (currentScreen < gameScreens.length) {
    if (event.keyCode === next && event.altKey) {
      currentScreen++;
      showScreenByNumber(currentScreen);
    }
  }
});
