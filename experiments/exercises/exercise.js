let calculator = {
  read() {
    this.num1 = +prompt("enter number 1")
    this.num2 = +prompt("enter number 2")
  },
  sum() {
    return this.num1 + this.num2
  },
  mul() {
    return this.num1 * this.num2
  }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
