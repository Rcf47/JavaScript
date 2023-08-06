"use strict"
const exampleObject = {
  firstName: "Vadim",
  lastName: "Ivanov"
};

let definePropertyObject = {};
let definePropertyObject1 = {};

Object.defineProperty(definePropertyObject, "firstName", {
  value: "Vadim",
  writable: true,
  enumerable: true,
  configurable: true
})

Object.defineProperties(definePropertyObject1, {
  "firstName": {
    value: "Vadim",
    configurable: true,
    enumerable: true,
    writable: true
  },
  "lastName": {
    value: "Ivanov",
    configurable: true,
    enumerable: true,
    writable: true
  }
})

let objectFreeze = { firstName: "Vadim", lastName: "Ivanov" };

Object.freeze(objectFreeze)

// objectFreeze.newName = "Hello"

let descriptor = Object.getOwnPropertyDescriptor(exampleObject, "firstName")

let propertyArray = Object.getOwnPropertyNames(exampleObject)
let newSymbol = Symbol("mySymboldescription")
exampleObject[newSymbol] = "My new Symbol"
let symbolsArray = Object.getOwnPropertySymbols(exampleObject)
// console.log(definePropertyObject.firstName)
// console.log(definePropertyObject1.firstName, definePropertyObject1.lastName)
// console.log(exampleObject)

console.log(Object())
// console.log(objectFreeze)
// console.log(descriptor)
// console.log(propertyArray)
// console.log(exampleObject)
// console.log(symbolsArray)

const hasOwnProperty = exampleObject.hasOwnProperty("firstName")
// console.log(hasOwnProperty)
let hello = Object("Hello")
let hello1 = "Hello world"
let hello2 = Object(false)
// console.log(hello)
// console.log(hello2)
// console.log(hello1)
// console.log(hello2.toString())
