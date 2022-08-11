const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = Math.floor(Math.random() * 10);
let tries = 0;



function guessNum(tryNum) {
    return new Promise((resolve, reject) => {
        rl.question(`Попытка № ${tryNum}: `, (guess) => {
            resolve(guess);
        })
    })
}

async function input() {
    while (true) {
        tries++;
        const guess = await guessNum(tries);
        if (guess > answer) message = 'меньше';
        else if (guess < answer) message = 'больше';
        else {
            console.log(`Вы угадали с ${tries} попытки!`);
            rl.close();
            break;
        }
        console.log(message);
    }
}

console.log('Угадайте число от 0 до 9: ');
input();
