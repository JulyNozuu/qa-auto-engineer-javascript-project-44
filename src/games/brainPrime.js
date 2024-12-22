import {
  game,
} from './index.js';

import {
  getRandomInt,
} from './random.js';

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const prime = (test) => {
    let numberОfDivisors = 0;
    for (let i = 2; i < test; i += 1) {
      if (test % i === 0) {
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
