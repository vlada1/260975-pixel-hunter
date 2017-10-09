import assert from 'assert';
import timer from '../components/timer.js';

describe(`Set the timer`, () => {
  it(`should return installed time after timer initialization`, () => {
    const testTimer = timer.configure(30);
    assert.equal(30, testTimer.getTime());
  });
  it(`should return "Time is up" after time expires`, () => {
    const testTimer = timer.configure(0);
    assert.equal(`Time is up`, testTimer.start());
  });
  it(`should return -1 if time is less then 0`, () => {
    const testTimer = timer.configure(-5);
    assert.equal(-1, testTimer);
  });
  it(`should return less on 1 after timer tick`, () => {
    const testTimer = timer.configure(30);
    assert.equal(29, testTimer.start());
  });
});
