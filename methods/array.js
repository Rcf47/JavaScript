let array = [1, "Vadim", { age: 34 }, 4.5, 11];

//push(...item)
//--------------
//push(...item) add item in the end
array.push(48);
//console.log(array.push(48)); // return new length of array
// console.log(array)

//pop()
//--------------
array.pop(); //removes last element of array
//console.log(array)
//console.log(array.pop()) //return removed element

//shift()
//--------------
array.shift(); //removes first element from array
//console.log(array)
//console.log(array.shift()) //return removed element

//unshift(...items)
//--------------
//array.unshift(...items) //add elements to the beggining of the array
array.unshift(1, 3, "Hello");
//console.log(array)
//console.log(array.unshift(2, 4, "world")) // return new length of array

//splice(start, deleteCount, item1, item2)
//--------------
//array.splice(start, deleteCount, item1, item2) changes the content of the array removing or replacing
//array.splice(2) // delete all from index 2
//array.splice(2, 1)
//console.log(array.splice(0, 1, "Javascript")) //remove first item and replace with Javascript

//slice(start, end)
//--------------
array.slice(1, 3);
// return a copy of selection array
// console.log(array)

//concat(array)
//--------------
let newArray = array.concat([3, 2, 1, [2, 3]]); //merge two or more arrays return new array
//console.log(array)
//console.log(newArray)

//forEach(item.index.array)
//--------------
//array.forEach((item, index, array) => {
// console.log(
//  `item is ${item}, index is ${index}, array is ${array}`
//);
//}); //fn for every element in array, return is ignoring

//indexOf(item, index)
//--------------
//console.log(array.indexOf("Vadim", 2)) //find Vadim from index 2, return index

//includes(item, index);
//--------------
//console.log(array.includes("Vadim", 2)) //find Vadim from index 2, return true if find

//find(item, index, array)
//--------------
let findArray = array.find((item, index, array) => item === "Vadim") //return item if true or undefined
//console.log(findArray)

//findIndex(item, index, array)
//--------------
let findIndexArray = array.findIndex(item => item === "Vadim") //return index if true or -1 
//console.log(findIndexArray)

//findLastIndex(item, index, array)
//--------------
let findLastIndex = array.findLastIndex(item => item === "Vadim") //return index if true or -1 find from right to left
//console.log(findLastIndex)

//filter(item, index, array)
//--------------
let filterArray = array.filter(item => item === 3) // return array items when item === 3 true or []
//console.log(filterArray)

//map(item, index, array)
//--------------
let mapArray = array.map(item => item + 1) //return new array with calling function on every element
//console.log(mapArray)

//sort()
//--------------
//array.sort() // sort array like string we should give function that. return reference of the array now sorted
//return 0, 1 , -1 for correct sort numbers
//console.log(array)

//reverse()
//--------------
//array.reverse() //change order
//console.log(array)

//split(delim)
//--------------
let splitArray = "Hello my friend how you doing".split(" ") //return array from string with delim, can take second atribut how many items in array can be
//console.log(splitArray)

//join(glue)
//-------------
//console.log(splitArray.join(" ")) //return string from array with glue between them

//reduce((accumulator, item, index, array) => {}, initial)
//-------------
//console.log([1, 2, 3, 6, 4, 7].reduce((acc, item) => acc + item, 0)) // acc = initial in first start function, acc save all values, acc = first element and function start from index 1 if initial not defined

//Array.isArray()
//-------------
//console.log(Array.isArray(array)) //return true if array is array

//every(fn)/some(fn)
//-------------
//console.log(array.every(() => 2 > 0)) //return false and stop cycle when false
//console.log(array.some(() => 2 < 0)) //return true if one element return true and stop cycle

//fill(value, start, end)
//-------------
//console.log(array.fill("Hello", 0, 2)) //fill array with value from start to end

//flat(depth)/flatMap(fn)
//-------------
let flatArray = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
//console.log(flatArray.flat(2))
//console.log(flatArray.flatMap((item) => item === 3 ? [3, 2] : item)) // arr.map(...args).flat() same
