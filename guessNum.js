const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = Math.floor(Math.random() * 10);
let tries = 1;


function guessNum() {
  rl.question(`Попытка № ${tries}: `, (guess) => {
      if (guess > answer) message = 'меньше';
      else if (guess < answer) message = 'больше';
      else {
        console.log(`Вы угадали с ${tries} попытки!`);
        rl.close();
        return;
      }
      tries++;
      console.log(message);
      guessNum();
  });
}

console.log('Угадайте число от 0 до 9: ');
guessNum();
