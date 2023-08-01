let animal = {
  name: "animal",
  eats: true,
  walk() {
    //console.log(`${this.name} walk`)
  }
};

let rabbit = {
  name: "rabbit",
  jumps: true,
  __proto__: animal
};

// walk взят из прототипа
animal.walk()
rabbit.walk(); // this walk

function Human(name) {
  this.name = name
}

Human.prototype.hello = function greetings() {
  //console.log(`Hello ${this.name}`)
}

let vadim = new Human("vadim")
//console.log(vadim.name)
vadim.hello()

function Language(name) {
  this.name = name
}

const js = new Language('JS')

console.log(js.name)



