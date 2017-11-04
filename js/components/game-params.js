export const initialData = {
  name: `default`,
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

export const setName = (data, name) => {
  return Object.assign({}, data, {name});
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

  answers.forEach(function (answer) {
    switch (answer) {
      case `wrong`:
        wrong++;
        break;
      case `correct`:
        correct++;
        break;
      case `fast`:
        fastBonuses++;
        correct++;
        break;
      case `slow`:
        fines++;
        correct++;
        break;
    }
  });

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
