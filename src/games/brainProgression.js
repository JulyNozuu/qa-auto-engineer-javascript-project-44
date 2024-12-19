/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
import {
  game,
} from './index.js';

export default () => {
  const rule = 'What number is missing in the progression?';
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const progression = (a, n, d) => {
    const result = [];
    for (let i = 1; i < n; i += 1) {
      a += d; result.push(a);
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
    const re = /\,/gi;
    const newrrayToString = arrayToString.replace(re, ' ');
    const question = `${newrrayToString}`;
    return [question, result];
  };
  game(rule, gameLogic);
};
