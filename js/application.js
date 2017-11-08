import AppController from './service';
import GameOneView from './templates/game/game1-screen';
import GameTwoView from './templates/game/game2-screen';
import GameThreeView from './templates/game/game3-screen';
import IntroView from './templates/intro/intro-screen';
import GreetingView from './templates/greeting/greeting-screen';
import RulesView from './templates/rules/rules-screen';
import StatsView from './templates/stats/stats-screen';
import Loader from './loader';

const ControllerId = {
  INTRO: `intro`,
  WELCOME: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const Routes = {
  [ControllerId.INTRO]: IntroView,
  [ControllerId.WELCOME]: GreetingView,
  [ControllerId.RULES]: RulesView,
  [ControllerId.STATS]: StatsView
};

const LevelsId = {
  GAME_ONE: `two-of-two`,
  GAME_TWO: `tinder-like`,
  GAME_THREE: `one-of-three`
};

const Levels = {
  [LevelsId.GAME_ONE]: GameOneView.init,
  [LevelsId.GAME_TWO]: GameTwoView.init,
  [LevelsId.GAME_THREE]: GameThreeView.init
};

const saveState = (state) => {
  return JSON.stringify(state);
};


class Application {

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
    this.startGame();
  }

  static changeHash(id, old) {
    const controller = Routes[id];
    if (controller) {
      AppController.resetUserData();
      AppController.resetGameScreen();
      this.resetGameDataValues();
      if (id === ControllerId.STATS) {
        this.showStats();
      } else {
        controller.init();
      }
    } else if (old) {
      if (id.indexOf(ControllerId.STATS) === -1 && id !== ControllerId.GAME) {
        location.hash = old;
      }
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
    location.hash = `${ControllerId.STATS}?${saveState(AppController.userData)}`;
    StatsView.init(AppController.userData.name);
  }

  static async loadAllGameData() {
    this.data = await Loader.loadData();
    this._gameDataValues = this.data;
  }

  static async startGame() {
    if (!this.data) {
      this.showIntro();
      await this.loadAllGameData();
    }
    this.showGreeting();
  }

  static resetGameDataValues() {
    if (this.data) {
      this._gameDataValues = this.data;
    }
  }

  static async getNextLevel() {
    const currentData = this._gameDataValues[AppController.gameScreen];
    if (!currentData || AppController.isLivesEnd) {
      await Loader.sendResults(AppController.userData);
      this.showStats();
      AppController.isLivesEnd = false;
      return;
    }
    Levels[currentData.type](currentData, AppController.userData, this.livesCount);
    location.hash = ControllerId.GAME;
    AppController.gameScreen++;
  }

  static timerCallback() {
    AppController.changeLive();
    this.getNextLevel();
  }

  static livesCount() {
    const emptyHeartIcon = `heart__empty.svg`;
    const fullHeartIcon = `heart__full.svg`;
    const maxLivesValue = 3;

    const currentLivesValue = AppController.userData.lives;

    let hearts = ``;

    for (let i = maxLivesValue; i > 0; i--) {
      hearts += `<img src="img/${ currentLivesValue < i ? emptyHeartIcon : fullHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
    }

    return hearts;
  }
}
export default Application;
