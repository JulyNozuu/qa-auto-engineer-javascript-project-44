import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
};
export {getRandomInt};

function getRandomOper() {
  var array = ['+', '-', '*'];
  var randomItem = array[Math.floor(Math.random() * array.length)];
      return randomItem;
  };
  export {getRandomOper};

const greeting = (rule) => {
    // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log (rule);
  return userName;
};
export {greeting};

const check = (correctAnswer, userName) => {
  if (correctAnswer ==3){console.log(`Congratulations, ${userName}!`);
}
};
export {check};

