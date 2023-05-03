const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
})

rl.prompt()

rl.on('line', command => {
  command.trim()
  console.log(command)
}).on('close', () => {
  process.exit(0)
})

