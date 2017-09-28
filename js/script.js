const gameScreens = document.querySelectorAll(`template`);
let currentScreen = 1;

let showScreenByNumber = (page) => {
  let mainElement = document.querySelector(`main`);
  mainElement.innerHTML = ``;
  return mainElement.appendChild(gameScreens[page - 1].content.cloneNode(true));
};

showScreenByNumber(1);

addEventListener(`keydown`, function (event) {
  if (currentScreen < gameScreens.length) {
    if (event.keyCode === 39 && (event.ctrlKey || event.metaKey)) {
      currentScreen++;
      showScreenByNumber(currentScreen);
    }
  }
});

addEventListener(`keydown`, function (event) {
  if (currentScreen > 1) {
    if (event.keyCode === 37 && (event.ctrlKey || event.metaKey)) {
      currentScreen--;
      showScreenByNumber(currentScreen);
    }
  }
});
