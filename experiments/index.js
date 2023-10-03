const splitObjectJustForFun = { a: 2, b: 3, c: 4, d: 5, e: 6 };
//console.log("Hmello world");

function hello() {
  let hello = "Hello";
  let world = "world2";
  //console.log(hello, world);
}
function sayMyname(name, age, mood) {
  //console.log(`My name is ${name}, my age is ${age}, my mood is ${mood}`);
}
let array = ["Vadim", 0, "Pasha", 2, "Misha"];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  let arrayNumber = [1];
  let arrayNames = [];
  if (typeof element == "number") {
    arrayNumber = [element];
    //console.log(arrayNumber);
  } else {
    arrayNames += element;
    //console.log(arrayNames);
  }
}
let unusableVarrable = ["don't", 3, "use it"];
let coolNum = 3;
let anotherCoolNum = 4;
let sum = coolNum + anotherCoolNum;
//console.log(sum);
hello();
sayMyname();

let experimentObj = {
  name: "Vadim",
  age: 34,
  habbits: {
    games: true,
    language: "English",
  },
};

let copy = { ...experimentObj };

copy.name = "newName";

copy.habbits.games = false;

let deepCopy = JSON.parse(JSON.stringify(experimentObj));
//console.log(experimentObj);

deepCopy.habbits.games = !deepCopy.habbits.games;

//console.log(experimentObj);
//console.log(deepCopy);

let arrayForEach = [1, 2, 3, 4, 5];
arrayForEach.forEach((el) => el + 1);
//console.log(arrayForEach);

//console.log('hello');

const person = {
  "name": "Vadim",
  age: 35,
  3: 4,
  "city": "Sosonovoborsk",
  [2 - 1]: "hello"
}

const salaries = {
  Pete: 140,
  John: 230,
  Antony: 300
}
let tmp = 0
let tmp1 = 0

for (let [, val] of Object.entries(salaries)) {
  tmp += val
}
for (let key in salaries) {
  tmp1 += salaries[key]
}

//console.log(tmp)
//console.log("age" in person)
//console.log(person[4 - 3])
