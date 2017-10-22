import assert from 'assert';
import Timer from '../components/timer.js';

describe(`Set the timer`, () => {
  it(`should return installed time after timer initialization`, () => {
    const testTimer = new Timer(30);
    assert.equal(30, testTimer.getTime());
  });
  it(`should throw an error`, () => {
    assert.throws(Timer, Error, `Time can't be less then 0`);
  });
});
