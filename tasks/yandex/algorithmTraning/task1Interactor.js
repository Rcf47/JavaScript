const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let r = undefined
let i = undefined
let c = undefined
let result

rl.on('line', arg => {
  if (r === undefined) {
    r = Number(arg)
    return
  }
  if (i === undefined) {
    i = Number(arg)
    return
  }
  if (c === undefined) {
    c = Number(arg)
  }
  switch (i) {
    case 0:
      if (r !== 0) {
        result = 3
      } else {
        result = c
      }

      break;
    case 1:
      result = c

      break;
    case 4:
      if (r !== 0) {
        result = 3
      } else {
        result = 4
      }

      break;
    case 6:
      result = 0

      break;
    case 7:
      result = 1
      break
    default:
      result = i
      break;
  }
  console.log(result)
  rl.close
});
