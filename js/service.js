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
  STATS: `stats`
};

const routes = {
  [ControllerId.INTRO]: IntroView,
  [ControllerId.WELCOME]: GreetingView,
  [ControllerId.RULES]: RulesView,
  [ControllerId.STATS]: StatsView
};

export class Application {

  static init() {
    const hashChangeHandler = (event) => {
      let old;
      if (event) {
        old = event.oldURL.slice(event.oldURL.indexOf(`#`));
      }
      const hashValue = location.hash.replace(`#`, ``);
      Application.changeHash(hashValue, old);

    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, old) {
    const controller = routes[id];
    if (controller) {
      resetUserData();
      resetGameScreen();
      resetGameDataValues();
      if (id === ControllerId.STATS) {
        StatsView.init(userData);
      } else {
        controller.init();
      }
    } else if (old && id !== ControllerId.GAME) {
      location.hash = old;
    }
  }

  static showIntro() {
    IntroView.init();
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    GreetingView.init();
    location.hash = ControllerId.WELCOME;
  }

  static showRules() {
    RulesView.init();
    location.hash = ControllerId.RULES;
  }

  static showStats() {
    StatsView.init(userData);
    location.hash = ControllerId.STATS;
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
        GameOneView.init(currentData, userData, livesCount);
        location.hash = ControllerId.GAME;
        gameScreen++;
        return;
      case `gameTypeTwo`:
        GameTwoView.init(currentData, userData, livesCount);
        location.hash = ControllerId.GAME;
        gameScreen++;
        return;
      case `gameTypeThree`:
        GameThreeView.init(currentData, userData, livesCount);
        location.hash = ControllerId.GAME;
        gameScreen++;
        return;
      default:
        return;
    }
  }
}
