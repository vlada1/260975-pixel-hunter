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

  start(element, callback) {

    const _tick = () => {
      element.innerHTML = this.currentTime;
      this.currentTime--;

      if (this.currentTime <= 0) {
        if (callback !== null) {
          callback();
        }
      } else {
        this.timeoutId = setTimeout(_tick, 1000);
      }
      return this.currentTime;
    };
    _tick();
  }

  stop() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
    this.callback = null;
  }
}

export default Timer;
