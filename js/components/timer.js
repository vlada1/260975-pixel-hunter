class Timer {
  constructor(sec) {
    if (sec < 0) {
      throw new Error(`Time can't be less then 0`);
    }
    this.currentTime = sec;
  }

  getTime() {
    return this.currentTime;
  }

  tick() {
    if (this.currentTime === 0) {
      return `Time is up`;
    }

    if (this.currentTime > 0) {
      this.currentTime--;
    }

    return this.currentTime;
  }
}

export default Timer;
