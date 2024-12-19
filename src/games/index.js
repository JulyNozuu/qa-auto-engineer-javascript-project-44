/* eslint-disable no-sequences */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

const game = (rule, gameLogic) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let correctAnswer;
  for (let i = 1; i < 4; i += 1) {
    const [randomNumber, result] = gameLogic();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (result == answer) {
      console.log('Correct!'); correctAnswer = i;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet\'s try again, ${userName}!`); return;
    }
  }
  if (correctAnswer == 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
// eslint-disable-next-line import/prefer-default-export
export { game };
