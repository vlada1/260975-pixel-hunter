class Timer {
  constructor(sec, element, callback) {
    if (sec < 0) {
      throw new Error(`Time can't be less then 0`);
    }
    this.currentTime = sec;
    this.element = element;
    this.callback = callback;
  }

  getTime() {
    return this.currentTime;
  }

  start() {

    const _tick = () => {
      this.element.innerHTML = this.currentTime;
      this.currentTime--;

      if (this.currentTime <= 0) {
        if (this.callback !== null) {
          this.callback();
        }
      } else {
        this.timeoutId = setTimeout(_tick, 1000);
      }
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
