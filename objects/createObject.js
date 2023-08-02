const person = {
  firstName: "Vadim",
  lastName: "Ivanov"
};

//----------
const person1 = new Object();
person1.firstName = "Vadim";
person1.lastName = "Ivanov";

//----------
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person2 = new Person("Vadim", "Ivanov")
const person3 = new Person("Ivan", "Vadim")
// console.log(person2.firstName, person2.lastName)

//----------
const orgObject = { company: "ABCGroup" };

const person4 = Object.create(orgObject, { firstName: { value: "Vadim" }, lastName: { value: "Ivanov" } });
// console.log(person4.company)

//----------
const objFirstName = { firstName: "Vadim" };
const objLastName = { lastName: "Ivanov" };

const person5 = Object.assign({}, objFirstName, objLastName)
// console.log(person5.firstName, person5.lastName)

//----------

class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person6 = new Person1("Vadim", "Ivanov");
// console.log(person6.firstName, person6.lastName)

//----------
