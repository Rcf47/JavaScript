const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve('dir', 'dir2', 'dir3'), { recursive: true })
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log("Directory created")
// })

fs.rmdir(path.resolve('dir'), (err) => {
  if (err) {
    throw err;
  }
})
