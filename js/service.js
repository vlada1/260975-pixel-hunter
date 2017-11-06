import {initialData, setLives, setStats, setName} from './components/game-params';

class AppController {
  constructor() {
    this.userData = Object.assign({}, initialData);
    this.gameScreen = 0;
    this.isLivesEnd = false;
  }

  static resetUserData() {
    this.userData = Object.assign({}, initialData);
  }

  static resetGameScreen() {
    this.gameScreen = 0;
  }

  static changeName(name) {
    this.userData = setName(this.userData, name);
  }

  static changeLive() {
    this.userData = setStats(this.userData, `wrong`, this.gameScreen - 1);
    if (this.userData.lives > 0) {
      this.userData = setLives(this.userData, this.userData.lives - 1);
    } else {
      this.isLivesEnd = true;
    }
  }

  static getStats(time) {
    if (time > 20) {
      this.userData = setStats(this.userData, `fast`, this.gameScreen - 1);
    } else if (time < 10) {
      this.userData = setStats(this.userData, `slow`, this.gameScreen - 1);
    } else {
      this.userData = setStats(this.userData, `correct`, this.gameScreen - 1);
    }
  }
}

export default AppController;
