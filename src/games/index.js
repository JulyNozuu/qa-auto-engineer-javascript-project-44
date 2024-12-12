/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export { getRandomInt };

function getRandomOper() {
  const array = ['+', '-', '*'];
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}
export { getRandomOper };

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
export { NOD };

const greeting = (rule) => {
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  return userName;
};
export { greeting };

const check = (correctAnswer, userName) => {
  if (correctAnswer == 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export { check };
