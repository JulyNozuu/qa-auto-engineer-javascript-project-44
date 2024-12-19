/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */

import {
  game,
} from './index.js';

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const prime = (test) => {
    let numberОfDivisors = 0;
    // eslint-disable-next-line no-unreachable-loop, no-plusplus
    for (let i = 2; i < test; i += 1) {
      if (test % i == 0) {
        numberОfDivisors += 1;
      }
    }
    if (numberОfDivisors !== 0) { return 'no'; }
    return 'yes';
  };

  const gameLogic = () => {
    const question = getRandomInt(1, 1000);
    const result = prime(question);
    return [question, result];
  };
  game(rule, gameLogic);
};
