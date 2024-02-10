const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputstage = 0;
let name = "";
let age = 0;
rl.on("line", (input) => {
  if (inputstage === 0) {
    name = input;
    inputstage++;
  } else if (inputstage === 1) {
    age = Number(input);
    helloMyfriend(name, age);
    rl.close();
  }
});

function helloMyfriend(name, age) {
  console.log(`Hello my friend ${name}, looks like you are ${age} years old`);
}
