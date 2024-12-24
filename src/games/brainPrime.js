import {
  game,
} from './index.js';
import getRandomInt from './random.js';

const isPrime = (test) => {
  let numberОfDivisors = 0;
  for (let i = 2; i < test; i += 1) {
    if (test % i === 0) {
      numberОfDivisors += 1;
    }
  }
  return Boolean(numberОfDivisors !== 0);
};
export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  function gameLogic() {
    const question = getRandomInt(1, 1000);
    const result = isPrime(question) ? 'no' : 'yes';
    return [question, result];
  }
  game(rule, gameLogic);
};
