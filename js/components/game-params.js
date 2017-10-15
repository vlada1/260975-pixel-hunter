export const initialData = {
  timer: 30,
  lives: 3,
  stats: [`UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`, `UNKNOWN`],
};

export const setLives = (data, lives) => {
  if (lives < 0 || lives > initialData.lives) {
    throw new RangeError(`This number cant be number of lives`);
  } else {
    return Object.assign({}, data, {lives});
  }
};

export const setStats = (data, stats, num) => {
  const arrStats = [`SLOW`, `FAST`, `CORRET`, `WRONG`, `UNKNOWN`];
  if (arrStats.includes(stats) === false) {
    throw new Error(`Value should be: ${arrStats}`);
  }
  const copiedArr = data.stats.slice();
  copiedArr[num] = stats;

  const copiedObject = JSON.parse(JSON.stringify(data));
  copiedObject.stats = copiedArr;

  return copiedObject;
};
