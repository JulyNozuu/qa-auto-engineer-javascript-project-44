import readlineSync from 'readline-sync';
import {greeting} from './index.js';
import {getRandomInt} from './index.js';
import {check} from './index.js';
import {getRandomOper} from './index.js';

const brainCalc = () => {
    
    // Приветствуем игрока
    let userName = greeting('What is the result of the expression?');

    // Задаем переменную "правильного ответа"
    let correctAnswer;

    // Логика игры
    for (let i = 1; i<4; i+=1) {
    let result;
    let randomTerms1 = getRandomInt(1,1000);
    let randomTerms2 = getRandomInt(1000,2000);
    let randomOperator = getRandomOper();
    if(randomOperator =='+') {result = Number(randomTerms1) + Number(randomTerms2);
    } else if (randomOperator == '-'){result = Number(randomTerms1) - Number(randomTerms2);
    } else {result = Number(randomTerms1) * Number(randomTerms2);
    } 
        console.log (`Question: ${randomTerms1} ${randomOperator} ${randomTerms2}`);
        const Question = readlineSync.question('Your answer: ');

     if (result == Question) {console.log('Correct!'); correctAnswer = i;
        } else {console.log(`${Question} is wrong answer ;(. Correct answer was ${result}. \nLet\'s try again, ${userName}!`); return;
    }

   // Условия выйгрыша
   check(correctAnswer, userName);
}
};

export default brainCalc;