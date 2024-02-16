//console.log("Hello world");

//const nums = [1, 2, 3, 4, 5] //[1, 4, 9, 16, 25]
//const map = nums.map(x => x * x)
//console.log(map)
//const names = ["alice", "bob", "charlie", "danielle"]
//const map2 = names.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
//console.log(map2)
//const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
//const map3 = pokemon.map(elem => `<p>${elem}</p>`)
//console.log(map3)

//function greeting(name) {
//  const date = new Date()
//  const hours = date.getHours()
//  let timeOfDay;
//  if (hours >= 20 && hours < 4) {
//    timeOfDay = "night"
//  } else if (hours >= 4 && hours < 12) {
//    timeOfDay = "morning"
//  } else if (hours >= 12 && hours < 17) {
//    timeOfDay = "afternoon"
//  } else {
//    timeOfDay = "evening"
//  }
//  return `Good ${timeOfDay}, ${name}`
//}
//
//console.log(greeting("Bob"))

var a = "test 1";
function test() {
  console.log(a);
  var a = "test 2";
}

// for (var i = 0; i <= 5; i++) {
//   setTimeout(() => console.log(i), i * 600)
// }

function createIncrement() {
  let count = 0;
  function increment() {
    console.log(count++);
    console.log(count);
  }
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
// increment() // 0
// increment() // 1
// increment() // 2
// log() // 3

const { x: hello, y: world, z: how } = { x: 2, y: 4.5, z: 3 };

//console.log(hello, world, how)

const obj = {
  name: { firstName: "Vadim" },
  surname: { secondName: "Cherepanov" },
};

const {
  name: { firstName: myName },
} = obj;
// console.log(myName)
let first = 8,
  second = 6;

// (() => {
//   "use strict";
//   [first, second] = [second, first]
//
// })();
// console.log(first, second)

let arr = [1, 2, 3, 4, 5];

let [, , ...newArr] = arr;
// console.log(newArr)
//
let stats = { a: "Vadim", c: "Cherepanov" };

function half({ a, c }) {
  return `${a} ${c}`;
}
// console.log(half(stats))
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let everyItem of arr) {
    resultDisplayArray.push(everyItem);
  }

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray)

for (let item of arr) {
  // console.log(item)
}

// console.log(typeof null)
let double = (num) => num * 2;
let increment2 = (num) => num + 1;
