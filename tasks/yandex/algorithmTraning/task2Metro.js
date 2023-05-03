const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  let [n, i, j] = line.split(' ').map(Number)
  let answer1
  let answer2
  if (i < j) {
    answer1 = n + i - j - 1
  } else {
    answer1 = n + j - i - 1
  }
  answer2 = Math.abs(i - j) - 1
  answer1 < answer2 ? console.log(answer1) : console.log(answer2)
  rl.close()
})
