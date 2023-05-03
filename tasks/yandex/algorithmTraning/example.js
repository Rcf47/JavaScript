const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(``, (numbers) => {
  let number = numbers.toString();
  let sum = number.split(" ").map(Number).reduce(
    (acc, secondValue) => acc + secondValue,
    0
  );
  console.log(sum);
  readline.close();
});
