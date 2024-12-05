import readlineSync from 'readline-sync';
const cli= () => {
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
};
export {cli};