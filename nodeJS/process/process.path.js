const path = require('path')

console.log(path.join(__dirname, 'first', 'second'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.resolve('first'))
