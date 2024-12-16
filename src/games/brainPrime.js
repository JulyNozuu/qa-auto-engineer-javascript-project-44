/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';
import {
  greeting, getRandomInt, check, prime,
} from './index.js';

const brainPrime = () => {
  // Приветствуем игрока
  const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

  // Задаем переменную "правильного ответа"
  let correctAnswer;

  // Логика игры
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = getRandomInt(1, 1000);
    const result = prime(randomNumber);
    console.log(`Question: ${randomNumber}`);
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

export default brainPrime;
