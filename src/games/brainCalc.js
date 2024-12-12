/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';
import {
  greeting, getRandomInt, check, getRandomOper,
} from './index.js';

const brainCalc = () => {
  // Приветствуем игрока
  const userName = greeting('What is the result of the expression?');

  // Задаем переменную "правильного ответа"
  let correctAnswer;

  // Логика игры
  for (let i = 1; i < 4; i += 1) {
    let result;
    const randomTerms1 = getRandomInt(1, 1000);
    const randomTerms2 = getRandomInt(1000, 2000);
    const randomOperator = getRandomOper();
    if (randomOperator == '+') {
      result = Number(randomTerms1) + Number(randomTerms2);
    } else if (randomOperator == '-') {
      result = Number(randomTerms1) - Number(randomTerms2);
    } else {
      result = Number(randomTerms1) * Number(randomTerms2);
    }
    console.log(`Question: ${randomTerms1} ${randomOperator} ${randomTerms2}`);
    const Question = readlineSync.question('Your answer: ');

    if (result == Question) {
      console.log('Correct!'); correctAnswer = i;
    } else {
      console.log(`${Question} is wrong answer ;(. Correct answer was ${result}. \nLet\'s try again, ${userName}!`); return;
    }

    // Условия выйгрыша
    check(correctAnswer, userName);
  }
};

export default brainCalc;
