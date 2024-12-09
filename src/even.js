import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

const greetingEven = () => {
    // Wait for user's response.
    const userName = readlineSync.question('May I have your name? ');
      console.log(`Hello, ${userName}!`);
      console.log ('Answer "yes" if the number is even, otherwise answer "no".');
      return userName;
    };
    export {greetingEven};

const even = () => {
    let correctAnswer;
    let userName = greetingEven();
    for (let i = 1; i<4; i+=1){
    let random = getRandomInt(1,1000);
    console.log (`Question: ${random}`)
    const Question = readlineSync.question('Your answer: ');
    if (random%2==0 && Question == 'yes'){console.log('Correct!'); correctAnswer=i;
    } else if (random%2 !==0 && Question == 'no'){console.log('Correct!'); correctAnswer=i;
    } else if (random%2 !==0 && Question == 'yes'){console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'. \nLet\'s try again, ${userName}!`); return;
    } else if (random%2 ==0 && Question == 'no'){console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'. \nLet\'s try again, ${userName}!`); return;
    } else {console.log(`is wrong answer ;(. Correct answer was \'no or yes\'. \nLet\'s try again, ${userName}!`);return;
}
    }
    if (correctAnswer ==3){console.log(`Congratulations, ${userName}!`);
};
};

export default even;