const gameScreens = document.querySelectorAll(`template`);
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
    if (event.keyCode === 37 && event.altKey) {
      currentScreen--;
      showScreenByNumber(currentScreen);
    }
  }

  if (currentScreen < gameScreens.length) {
    if (event.keyCode === 39 && event.altKey) {
      currentScreen++;
      showScreenByNumber(currentScreen);
    }
  }
});
