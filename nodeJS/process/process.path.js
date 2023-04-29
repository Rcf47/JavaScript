const path = require('path')

// console.log(path.join(__dirname, 'first', 'second'));
// console.log(path.join(__dirname, '..', '..'));
// console.log(path.resolve('first'))

let fullPath = path.resolve('first', 'second')
// console.log(path.parse(fullPath))

const siteUrl = 'http://localhost:8080/users?id=5123'
const url = new URL(siteUrl)
console.log(url)
