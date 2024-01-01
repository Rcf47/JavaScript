let theThing = 0;
let theList = [
  1,
  (false && (theThing = 10)) || (theThing = 20),
  theThing,
  false || (theThing = 10) || (theThing = 30),
  theThing,
];

console.log(theList); // [1, 20, 20, 10, 10];
