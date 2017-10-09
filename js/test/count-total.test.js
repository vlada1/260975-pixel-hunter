import assert from 'assert';
import {answerType} from '../components/game-data.js';
import countTotal from '../components/count-total.js';

const testCaseOne = {
  lives: 0,
  result: [
    {
      isCorrect: true,
      answerType: answerType.SLOW
    },
    {
      isCorrect: false,
      answerType: answerType.WRONG
    },
    {
      isCorrect: true,
      answerType: answerType.FAST
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.SLOW
    },
    {
      isCorrect: false,
      answerType: answerType.WRONG
    },
    {
      isCorrect: true,
      answerType: answerType.FAST
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.SLOW
    },
    {
      isCorrect: false,
      answerType: answerType.WRONG
    }
  ]
};

const testCaseTwo = {
  lives: 2,
  result: [
    {
      isCorrect: true,
      answerType: answerType.SLOW
    },
    {
      isCorrect: false,
      answerType: answerType.WRONG
    },
    {
      isCorrect: true,
      answerType: answerType.FAST
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.SLOW
    },
    {
      isCorrect: false,
      answerType: answerType.WRONG
    },
    {
      isCorrect: true,
      answerType: answerType.FAST
    }
  ]
};

const testCaseThree = {
  lives: 3,
  result: [
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    },
    {
      isCorrect: true,
      answerType: answerType.CORRECT
    }
  ]
};

describe(`Count total points`, () => {
  it(`should return 500 in first test case`, () => {
    assert.equal(500, countTotal(testCaseOne));
  });
  it(`should return -1 if number of answers is less then 10`, () => {
    assert.equal(-1, countTotal(testCaseTwo));
  });
  it(`should return 1150 if all lifes left and all answers are correct`, () => {
    assert.equal(1150, countTotal(testCaseThree));
  });
});
