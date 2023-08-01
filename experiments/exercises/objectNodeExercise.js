const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {}
rl.question("Enter first number\n", (answer1) => {
  answers.answer1 = +answer1
  rl.question("Enter second number\n", (answer2) => {
    answers.answer2 = +answer2
    rl.close();
  })
})

answers.sum = function() { return this.answer1 + this.answer2 }
answers.mul = function() { return this.answer1 * this.answer2 }
rl.on('close', () => {
  console.log(`Your numbers is ${answers.answer1} and ${answers.answer2}`)
  console.log(answers.sum())
  console.log(answers.mul())
})
