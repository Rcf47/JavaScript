const { pipe, compose, partial, curry } = require("ramda");

const double = (num) => num * 2;
const increment = (num) => num + 1;

const result = pipe(double, double, increment, double)(5)
console.log(result) // 42

const result2 = compose(double, increment, double, double)(5)
const result3 = compose(double, increment, double, double)
console.log(result2) // 42
console.log(result3(5)) //42 бесточечный стиль

//function partial2(fn, apply) {
// return (...args) => fn(...apply, args)
//}
const sum2 = (x, y, z) =>
  console.log(x + y + z)
//const partialSum = partial2(sum2, 8)

//partialSum(13, 21) //42 not working

const curriedSum = curry(sum2)
curriedSum(8)(13)(21) //42
