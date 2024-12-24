import {
  game,
} from './index.js';
import getRandomInt from './random.js';

function isEven(number) {
  return Boolean(number % 2 === 0);
}

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameLogic = () => {
    const question = getRandomInt(1, 1000);
    const result = isEven(question) ? 'yes' : 'no';
    return [question, result];
  };
  game(rule, gameLogic);
};
