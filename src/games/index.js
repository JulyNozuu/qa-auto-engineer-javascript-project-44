import readlineSync from 'readline-sync';

export const game = (rule, gameLogic) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  const countOfRounds = 4;
  for (let i = 1; i < countOfRounds; i += 1) {
    const [question, result] = gameLogic();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`); return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default game;
