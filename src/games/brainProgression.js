/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  greeting, getRandomInt, check, progression,
} from './index.js';

const brainProgression = () => {
  // Приветствуем игрока
  const userName = greeting('What number is missing in the progression?');

  // Задаем переменную "правильного ответа"
  let correctAnswer;

  // Логика игры
  for (let i = 1; i < 4; i += 1) {
    let n = getRandomInt(6, 10);
    let arrayProgression = progression(getRandomInt(1, 100), n, getRandomInt(1, 100));

    let indexHiddenNumber = getRandomInt(0, n - 1);
    let result = arrayProgression[indexHiddenNumber];

    arrayProgression.splice(indexHiddenNumber, 1, '..');

    const arrayToString = arrayProgression.toString();
    const re = /\,/gi;
    const newrrayToString = arrayToString.replace(re, ' ');

    console.log(`Question: ${newrrayToString}`);
    const Question = readlineSync.question('Your answer: ');

    if (result == Question) {
      console.log('Correct!');
      correctAnswer = i;
    } else {
      console.log(
        `${Question.toString()} is wrong answer ;(. Correct answer was ${result.toString()}. \nLet\'s try again, ${userName}!`,
      );
      return;
    }
  }

  // Условия выйгрыша

  check(correctAnswer, userName);
};

export default brainProgression;
