export const Points = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

const StatsEnum = {
  WRONG: `wrong`,
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`
};

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
  const copiedStats = data.stats.slice();
  copiedStats[num] = stats;

  const copiedObject = Object.assign({}, data);
  copiedObject.stats = copiedStats;
  return copiedObject;
};

export const setName = (data, name) => {
  return Object.assign({}, data, {name});
};

export const countResult = (data) => {
  let correct = 0;
  let wrong = 0;
  let fastBonuses = 0;
  let fines = 0;
  let livesBonuses = data.lives > 0 ? data.lives : 0;
  const answers = data.stats;

  if (answers.length < 10) {
    return -1;
  }

  answers.forEach((answer) => {
    switch (answer) {
      case StatsEnum.WRONG:
        wrong++;
        break;
      case StatsEnum.CORRECT:
        correct++;
        break;
      case StatsEnum.FAST:
        fastBonuses++;
        correct++;
        break;
      case StatsEnum.SLOW:
        fines++;
        correct++;
        break;
    }
  });

  const isWin = wrong <= initialData.lives;
  let total;
  if (isWin) {
    total = {
      isWin,
      isCorrect: correct,
      totalPoints: correct * Points.CORRECT + (livesBonuses + fastBonuses) * Points.BONUS + fines * Points.FINE,
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
