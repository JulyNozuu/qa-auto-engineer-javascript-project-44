/* eslint-disable no-sequences */
/* eslint-disable no-useless-escape */
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

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};
export { NOD };

const greeting = (rule) => {
  // Wait for user's response.
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
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

const progression = (a, d) => {
  const n = getRandomInt(5, 10);
  const result = [];
  for (let i = 1; i < n; i += 1) {
    a += (i - 1) * d; result.push(a);
  }
  return result;
};
export { progression };

// eslint-disable-next-line consistent-return
const prime = (test) => {
  let numberОfDivisors = 0;
  // eslint-disable-next-line no-unreachable-loop, no-plusplus
  for (let i = 2; i < test; i += 1) {
    if (test % i == 0) {
      numberОfDivisors += 1;
    }
  }
  if (numberОfDivisors !== 0) { return 'no'; }
  return 'yes';
};
export { prime };
