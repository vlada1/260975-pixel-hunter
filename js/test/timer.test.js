import assert from 'assert';
import Timer from '../components/timer.js';

describe(`Set the timer`, () => {
  it(`should return installed time after timer initialization`, () => {
    const testTimer = new Timer(30);
    assert.equal(30, testTimer.getTime());
  });
  it(`should return "Time is up" after time expires`, () => {
    const testTimer = new Timer(0);
    assert.equal(`Time is up`, testTimer.tick());
  });
  it(`should throw an error`, () => {
    assert.throws(Timer, Error, `Time can't be less then 0`);
  });
  it(`should return less on 1 after timer tick`, () => {
    const testTimer = new Timer(30);
    assert.equal(29, testTimer.tick());
  });
});
