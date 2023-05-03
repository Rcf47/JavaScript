const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
})

rl.prompt()

rl.on('line', command => {
  console.log(command)
})
rl.on('close', () => {
  process.exit(0)
})
