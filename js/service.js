import {initialData, setLives, setStats} from './components/game-params';
import GameOneView from './templates/game/game1-screen';
import GameTwoView from './templates/game/game2-screen';
import GameThreeView from './templates/game/game3-screen';
import IntroView from './templates/intro/intro-screen';
import GreetingView from './templates/greeting/greeting-screen';
import RulesView from './templates/rules/rules-screen';
import StatsView from './templates/stats/stats-screen';
import questions from './templates/game/game-data';

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

export const getStats = (time) => {
  if (time > 20) {
    userData = setStats(userData, `fast`, gameScreen - 1);
  } else if (time < 10) {
    userData = setStats(userData, `slow`, gameScreen - 1);
  } else {
    userData = setStats(userData, `correct`, gameScreen - 1);
  }
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

export const timerCallback = () => {
  changeLive();
  Application.getNextLevel();
};

// Application

const ControllerId = {
  INTRO: `intro`,
  WELCOME: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  RESULT: `result`
};

const routes = {
  INTRO: IntroView,
  GREETING: GreetingView,
  RULES: RulesView,
  GAME_ONE: GameOneView,
  GAME_TWO: GameTwoView,
  GAME_THREE: GameThreeView,
  STATS: StatsView
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return initialData;
  }
};

export class Application {

  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      Application.changeHash(hashValue);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, state) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadState(state));
    }
  }

  static showIntro() {
    routes[`INTRO`].init();
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    routes[`GREETING`].init();
    location.hash = ControllerId.WELCOME;
  }

  static showRules() {
    routes[`RULES`].init();
    location.hash = ControllerId.RULES;
  }

  static showStats() {
    routes[`STATS`].init(userData);
    location.hash = `${ControllerId.RESULT}?${saveState(userData)}`;
  }

  static getNextLevel() {
    let currentData = gameDataValues.next().value;
    if (!currentData || isLivesEnd) {
      this.showStats();
      isLivesEnd = false;
      return;
    }
    switch (currentData.gameType) {
      case `gameTypeOne`:
        routes[`GAME_ONE`].init(currentData, userData, livesCount);
        location.hash = `${ControllerId.GAME}1`;
        gameScreen++;
        return;
      case `gameTypeTwo`:
        routes[`GAME_TWO`].init(currentData, userData, livesCount);
        location.hash = `${ControllerId.GAME}2`;
        gameScreen++;
        return;
      case `gameTypeThree`:
        routes[`GAME_THREE`].init(currentData, userData, livesCount);
        location.hash = `${ControllerId.GAME}3`;
        gameScreen++;
        return;
      default:
        return;
    }
  }
}
