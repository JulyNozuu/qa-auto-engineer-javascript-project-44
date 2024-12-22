import {
  game,
} from './index.js';

import {
  getRandomInt,
} from './random.js';

export default () => {
  const rule = 'What is the result of the expression?';

  function getRandomOper() {
    const array = ['+', '-', '*'];
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
  }

  function calculate(operator, terms1, terms2) {
    let expression;
    if (operator === '+') {
      expression = Number(terms1) + Number(terms2);
    } else if (operator === '-') {
      expression = Number(terms1) - Number(terms2);
    } else {
      expression = Number(terms1) * Number(terms2);
    }
    return expression;
  }

  const gameLogic = () => {
    const randomOperator = getRandomOper();
    const randomTerms1 = getRandomInt(1, 1000);
    const randomTerms2 = getRandomInt(1000, 2000);
    const result = calculate(randomOperator, randomTerms1, randomTerms2);
    const question = `${randomTerms1} ${randomOperator} ${randomTerms2}`;
    return [question, result];
  };
  game(rule, gameLogic);
};
