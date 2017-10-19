import {initialData, setLives, setStats} from './components/game-params.js';
import gameOne from './templates/game/game-1.js';
import gameTwo from './templates/game/game-2.js';
import gameThree from './templates/game/game-3.js';
import stats from './templates/stats/stats.js';
import questions from './templates/game/game-data.js';

let userData = Object.assign({}, initialData);

export const resetUserData = () => {
  userData = Object.assign({}, initialData);
};

let gameDataValues = questions.keys();
let gameScreen = 0;

export const resetGameDataValues = () => {
  gameDataValues = questions.keys();
};

export const resetGameScreen = () => {
  gameScreen = 0;
};

let isLivesEnd;
export const changeLive = () => {
  userData = setStats(userData, `wrong`, gameScreen - 1);
  if (userData.lives > 0) {
    userData = setLives(userData, userData.lives - 1);
  } else {
    isLivesEnd = true;
  }
};

export const getStats = () => {
  userData = setStats(userData, `correct`, gameScreen - 1);
};

export const livesCount = () => {
  const emptyHeartIcon = `heart__empty.svg`;
  const fullHeartIcon = `heart__full.svg`;
  const maxLivesValue = 3;

  let currentLivesValue = userData.lives;

  let hearts = ``;

  for (let i = maxLivesValue; i > 0; i--) {
    hearts += `<img src="img/${ currentLivesValue < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
  }

  return hearts;
};

export const getNextLevel = () => {
  let currentData = gameDataValues.next().value;
  if (!currentData || isLivesEnd) {
    stats(userData);
    return;
  }
  switch (currentData.gameType) {
    case `gameTypeOne`:
      gameOne(currentData, userData, livesCount);
      gameScreen++;
      return;
    case `gameTypeTwo`:
      gameTwo(currentData, userData, livesCount);
      gameScreen++;
      return;
    case `gameTypeThree`:
      gameThree(currentData, userData, livesCount);
      gameScreen++;
      return;
    default:
      return;
  }
};
