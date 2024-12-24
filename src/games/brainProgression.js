import {
  game,
} from './index.js';

import getRandomInt from './random.js';

export default () => {
  const rule = 'What number is missing in the progression?';

  const progression = (a, n, d) => {
    const result = [];
    let b = a;
    for (let i = 1; i < n; i += 1) {
      b += d; result.push(b);
    }
    return result;
  };

  const gameLogic = () => {
    const n = getRandomInt(6, 10);
    const arrayProgression = progression(getRandomInt(1, 100), n, getRandomInt(1, 100));

    const indexHiddenNumber = getRandomInt(0, n - 1);
    const result = arrayProgression[indexHiddenNumber];

    arrayProgression.splice(indexHiddenNumber, 1, '..');

    const arrayToString = arrayProgression.toString();
    const newLocal = /,/gi;
    const re = newLocal;
    const newrrayToString = arrayToString.replace(re, ' ');
    const question = `${newrrayToString}`;
    return [question, result];
  };
  game(rule, gameLogic);
};
