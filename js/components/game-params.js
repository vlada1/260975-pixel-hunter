export const initialData = {
  timer: 30,
  lives: 3,
  stats: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
};

export const setLives = (data, lives) => {
  if (lives < 0 || lives > initialData.lives) {
    throw new RangeError(`This number cant be number of lives`);
  } else {
    return Object.assign({}, data, {lives});
  }
};

export const setStats = (data, stats, num) => {
  const arrStats = [`slow`, `fast`, `correct`, `wrong`, `unknown`];
  if (arrStats.includes(stats) === false) {
    throw new Error(`Value should be: ${arrStats}`);
  }
  const copiedArr = data.stats.slice();
  copiedArr[num] = stats;

  const copiedObject = Object.assign({}, data);
  copiedObject.stats = copiedArr;

  return copiedObject;
};

export const points = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

export const countResult = (data) => {
  let correct = 0;
  let wrong = 0;
  let fastBonuses = 0;
  let fines = 0;
  let livesBonuses = data.lives > 0 ? data.lives : 0;
  const answers = data.stats;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === `wrong`) {
      wrong++;
    }
    if (answers[i] === `correct`) {
      correct++;
    }
    if (answers[i] === `fast`) {
      fastBonuses++;
      correct++;
    }
    if (answers[i] === `slow`) {
      fines++;
      correct++;
    }
  }

  let isWin = wrong < 4;
  let total;
  if (isWin) {
    total = {
      isWin,
      isCorrect: correct,
      totalPoints: correct * points.CORRECT + (livesBonuses + fastBonuses) * points.BONUS + fines * points.FINE,
      fastBonuses,
      livesBonuses: data.lives,
      slowFine: fines
    };
  } else {
    total = {
      isWin,
      isCorrect: 0,
      totalPoints: 0,
      fastBonuses: 0,
      livesBonuses: 0,
      slowFine: 0
    };
  }

  return total;
};
