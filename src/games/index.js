import readlineSync from 'readline-sync';

export const game = (rule, gameLogic) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  const numberOfWinds = 4;
  for (let i = 1; i < numberOfWinds; i += 1) {
    const [question, result] = gameLogic();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer.toString()) {
      console.log('Correct!');
    } else {
      // eslint-disable-next-line no-useless-escape
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet\'s try again, ${userName}!`); return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default game;
