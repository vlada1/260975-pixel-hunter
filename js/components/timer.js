class Timer {
  constructor() {
    this.currentTime = null;
  }

  configure(sec) {
    if (sec < 0) {
      return -1;
    }
    this.currentTime = sec;
    return this;
  }

  getTime() {
    return this.currentTime;
  }

  start() {
    if (this.currentTime === 0) {
      return `Time is up`;
    }

    if (this.currentTime > 0) {
      this.currentTime--;
    }

    return this.currentTime;
  }
}

const timer = new Timer();
export default timer;
