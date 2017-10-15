import {initialData, setLives, setStats} from './components/game-params.js';
import gameOne from './templates/game/game-1.js';
import gameTwo from './templates/game/game-2.js';
import gameThree from './templates/game/game-3.js';
import stats from './templates/stats/stats.js';
import questions from './templates/game/game-data.js';

let userData = JSON.parse(JSON.stringify(initialData));

export const createDomElement = (templateContent) => {
  const container = document.createElement(`div`);
  container.innerHTML = templateContent;
  return container;
};

export const renderPage = (element) => {
  const mainElement = document.getElementById(`main`);
  mainElement.innerHTML = ``;
  return mainElement.appendChild(element);
};

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

let gameDataValues = questions.values();
export const resetGameDataValues = () => {
  gameDataValues = questions.values();
};

let gameScreen = 0;
export const resetGameScreen = () => {
  gameScreen = 0;
};

export const changeLive = () => {
  userData = setStats(userData, `WRONG`, gameScreen - 1);
  if (userData.lives < 1) {
    // stats(userData);
    renderPage(stats);
  }
  userData = setLives(userData, userData.lives - 1);
};

export const getStats = () => {
  /* if (userData.timer > 20) {
    userData = setStats(userData, 'fast', gameScreen - 1);
  } else if (userData.timer < 10) {
    userData = setStats(userData, 'slow', gameScreen - 1);
  } else {
    userData = setStats(userData, 'correct', gameScreen - 1);
  } */
  userData = setStats(userData, `CORRECT`, gameScreen - 1);
};

export const getNextLevel = () => {
  let currentData = gameDataValues.next().value;
  return () => {
    if (!currentData) {
      // stats(userData);
      renderPage(stats);
      return;
    }
    switch (currentData.gameType) {
      case `gameTypeOne`:
        gameOne(currentData, userData, livesCount);
        gameScreen++;
        break;
      case `gameTypeTwo`:
        gameTwo(currentData, userData, livesCount);
        gameScreen++;
        break;
      case `gameTypeThree`:
        gameThree(currentData, userData, livesCount);
        gameScreen++;
        break;
      default:
        return;
    }
  };
};

export const livesCount = () => {
  const emptyHeartIcon = `img/heart__empty.svg`;
  const fullHeartIcon = `img/heart__full.svg`;
  const maxLivesValue = 3;

  let currentLivesValue = userData.lives;

  let hearts = ``;

  for (let i = maxLivesValue; i > 0; i--) {
    hearts += `<img src="img/${ currentLivesValue < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
  }

  return hearts;
};
