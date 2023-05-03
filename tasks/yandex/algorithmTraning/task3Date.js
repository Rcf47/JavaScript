const readline = require('readline')

function checkDate(line) {
  let [x, y, z] = line.split(' ').map(Number)
  if (x > 12 || y > 12) {
    return 1
  }
  if (x === y) {
    return 1
  }
  return 0
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', line => {
    console.log(checkDate(line))
    rl.close()
  })
} else {
  module.exports = { checkDate }
}
