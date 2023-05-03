const readline = require('readline')

function checkDistance(houseCordinate) {
  const arrDistance = houseCordinate.split(' ').map(Number);
  if (arrDistance.length === 1) {
    return arrDistance[0]
  }
  const allDistance = (arrDistance[0] + arrDistance[arrDistance.length - 1])
  let averageDistance
  if (allDistance > 0) {
    averageDistance = Math.round(allDistance / 2)
  } else {
    averageDistance = Math.floor(allDistance / 2)
  }
  return averageDistance
}

let studentNumber = undefined
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('line', line => {
    if (studentNumber === undefined) {
      studentNumber = Number(line)
      return
    }
    console.log(checkDistance(line))
    rl.close()
  })
} else {
  module.exports = { checkDistance }
}
