/* eslint-disable no-useless-escape */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';
import {
  greeting, getRandomInt, check, NOD,
} from './index.js';

const brainGcd = () => {
  // Приветствуем игрока
  const userName = greeting('Find the greatest common divisor of given numbers.');

  // Задаем переменную "правильного ответа"
  let correctAnswer;

  // Логика игры
  for (let i = 1; i < 4; i += 1) {
    let result;
    const randomNumber1 = getRandomInt(1, 1000);
    const randomNumber2 = getRandomInt(1, 1000);
    result = NOD(randomNumber1, randomNumber2);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const Question = readlineSync.question('Your answer: ');

    if (result == Question) {
      console.log('Correct!');
      correctAnswer = i;
    } else {
      console.log(
        `${Question} is wrong answer ;(. Correct answer was ${result}. \nLet\'s try again, ${userName}!`,
      );
      return;
    }
  }

  // Условия выйгрыша

  check(correctAnswer, userName);
};

export default brainGcd;
