import {
  game,
} from './index.js';
import {
  getRandomInt,
} from './random.js';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const NOD = (x, y) => {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  };

  const gameLogic = () => {
    const randomNumber1 = getRandomInt(1, 1000);
    const randomNumber2 = getRandomInt(1, 1000);
    const result = NOD(randomNumber1, randomNumber2);
    const question = `${randomNumber1} ${randomNumber2}`;
    return [question, result];
  };
  game(rule, gameLogic);
};
