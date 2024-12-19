/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */

import {
  game,
} from './index.js';

export default () => {
  const rule = 'What is the result of the expression?';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomOper() {
    const array = ['+', '-', '*'];
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
  }

  const gameLogic = () => {
    let result;
    const randomOperator = getRandomOper();
    const randomTerms1 = getRandomInt(1, 1000);
    const randomTerms2 = getRandomInt(1000, 2000);
    if (randomOperator == '+') {
      result = Number(randomTerms1) + Number(randomTerms2);
    } else if (randomOperator == '-') {
      result = Number(randomTerms1) - Number(randomTerms2);
    } else {
      result = Number(randomTerms1) * Number(randomTerms2);
    }
    const question = `${randomTerms1} ${randomOperator} ${randomTerms2}`;
    return [question, result];
  };
  game(rule, gameLogic);
};
