const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises')

// fs.mkdirSync(path.resolve('dir', 'dir2', 'dir3'), { recursive: true })
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log("Directory created")
// })

// fs.rmdir(path.resolve('dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Hello World', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File created")
// })

fsPromise.mkdir(path.resolve('dir')).catch(err => console.log(err))
