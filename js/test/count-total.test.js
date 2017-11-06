import assert from 'assert';
import {countResult} from '../components/game-params';

const testCaseOne = {
  lives: 0,
  stats: [`correct`, `wrong`, `correct`, `wrong`, `correct`, `correct`, `correct`, `wrong`, `correct`, `correct`]
};

const testCaseTwo = {
  lives: 2,
  stats: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

const testCaseThree = {
  lives: 3,
  stats: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`]
};

describe(`Count total points`, () => {
  it(`should return 700 in first test case`, () => {
    const total = countResult(testCaseOne);
    assert.equal(700, total.totalPoints);
  });
  it(`should return -1 if number of answers is less then 10`, () => {
    const total = countResult(testCaseTwo);
    assert.equal(-1, total);
  });
  it(`should return 1150 if all lifes left and all answers are correct`, () => {
    const total = countResult(testCaseThree);
    assert.equal(1150, total.totalPoints);
  });
});
