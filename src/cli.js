import readlineSync from 'readline-sync';

const cli = () => {
// Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};
export default cli;
