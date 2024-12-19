/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */

import {
  game,
} from './index.js';

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const gameLogic = () => {
    const question = getRandomInt(1, 1000);
    let result;
    if (question % 2 == 0) {
      result = 'yes';
    } else { result = 'no'; }
    return [question, result];
  };
  game(rule, gameLogic);
};
