import {answerType, points} from './game-data.js';

const countTotal = ({lives, result}) => {

  if (result.length < 10) {
    return -1;
  }

  let totalScore = lives * points.BONUS;

  result.forEach((answer) => {
    if (answer.isCorrect) {
      totalScore += points.CORRECT;

      if (answer.answerType === answerType.FAST) {
        totalScore += points.BONUS;
      }
      if (answer.answerType === answerType.SLOW) {
        totalScore += points.FINE;
      }
    } else if (!answer.isCorrect) {
      totalScore += points.FINE;
    }
  });

  return totalScore;
};

export default countTotal;
