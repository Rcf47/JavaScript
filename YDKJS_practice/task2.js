function range(start, end) {
  let answer = []
  if (end === undefined) {
    return function range2(end) {
      if (end < start || typeof end === "undefined") {
        return answer
      }
      let count = start
      answer.push(count)
      if (end > start) {
        for (let i = 0; i < (end - start); i++) {
          answer.push(++count)
        }
      }
      return answer
    }
  }
  if (end < start) {
    return answer
  }
  let count = start
  answer.push(count)
  if (end > start) {
    for (let i = 0; i < (end - start); i++) {
      answer.push(++count)
    }
  }
  return answer
}

//solution from book
function range2(start, end) {
  start = Number(start) || 0

  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end)
    }
  }
  else {
    end = Number(end) || 0;
    return getRange(start, end)
  }

}

function getRange(start, end) {
  let answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i)
  }
  return answer
}

console.log(range(3, 3)) // [3]
console.log(range(3, 8)) // [3, 4, 5, 6, 7, 8]
console.log(range(3, 0)) // []

let try1 = range(3)
let try2 = range(4)
console.log(try1(4))
console.log(try2())


console.log(range2(3, 3)) // [3]
console.log(range2(3, 8)) // [3, 4, 5, 6, 7, 8]
console.log(range2(3, 0)) // []

let try3 = range2(3)
let try4 = range2(4)
console.log(try3(4))
console.log(try4())
