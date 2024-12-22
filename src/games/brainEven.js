import {
  game,
} from './index.js';
import getRandomInt from './random.js';

function isEven(number) {
  let expression;
  if (number % 2 === 0) {
    expression = 'yes';
  } else { expression = 'no'; }
  return expression;
}

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameLogic = () => {
    const question = getRandomInt(1, 1000);
    const result = isEven(question);
    return [question, result];
  };
  game(rule, gameLogic);
};
