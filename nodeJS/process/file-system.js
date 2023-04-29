const fs = require("fs");
const path = require("path");
const fsPromise = require("fs/promises");

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

// fsPromise.mkdir(path.resolve('dir')).catch(err => console.log(err))
//
// fsPromise.writeFile(path.resolve('test.txt'), 'Hello World \n')
//   .then(fsPromise.appendFile(path.resolve('test.txt'), 'Hello from Append'))
//   .catch(err => console.log(err))
//
// fsPromise
//   .readFile(path.resolve("test.txt"), { encoding: "utf8" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//
let file = path.resolve('test.txt')
// fsPromise.rm(file).then(() => console.log(`${file} was removed`)).catch(err => console.log(err))
