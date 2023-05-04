const readline = require('readline')

function isDotInside(sideLength, pointCoordinateX, pointCoordinateY) {
  let x = pointCoordinateX
  let y = pointCoordinateY
  let d = sideLength

  if (x >= 0 && y >= 0 && x + y <= d) {
    console.log(0);
  } else if (x < 0 && y < 0) {
    console.log(1);
  } else if (x < 0 && y > d) {
    console.log(3);
  } else if (x > d && y < 0) {
    console.log(2);
  } else if (x + y > d) {
    if (x > y) {
      console.log(2);
    } else {
      console.log(3);
    }
  } else {
    console.log(1);
  }
}

let sideLength = undefined;
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('line', line => {
    if (sideLength === undefined) {
      sideLength = Number(line)
      return
    }
    const [pointCoordinateX, pointCoordinateY] = line.split(' ').map(Number)
    console.log(isDotInside(sideLength, pointCoordinateX, pointCoordinateY))
    rl.close()
  })
} else {
  module.exports = { isDotInside }
}

