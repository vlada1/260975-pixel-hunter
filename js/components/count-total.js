export const answerType = {
  WRONG: 0,
  CORRECT: 1,
  SLOW: 2,
  FAST: 3,
  UNKNOWN: 4
};

export const points = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

export const countTotal = ({lives, result}) => {

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
