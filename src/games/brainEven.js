import readlineSync from 'readline-sync';
import {greeting} from './index.js';
import {getRandomInt} from './index.js';
import {check} from './index.js';


const brainEven = () => {

    // Приветствуем игрока
    let userName = greeting('Answer "yes" if the number is even, otherwise answer "no".'); 

    // Задаем переменную "правильного ответа"
    let correctAnswer; 
    
    // Логика игры
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
    // Условия выйгрыша
    check(correctAnswer, userName);
};

export default brainEven;