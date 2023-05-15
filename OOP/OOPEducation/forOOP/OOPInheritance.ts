class Person {
  public name: string;
  public surname: string;
  public age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age
  }

  get getName() {
    return this.name
  }

  get getSurname() {
    return this.surname
  }

  get getAge() {
    return this.age
  }

  set newName(name: string) {
    this.name = name
  }

  set newSurname(surname: string) {
    this.surname = surname
  }

  set newAge(age: number) {
    this.age = age
  }
}

class Employee extends Person {
  private inn: number;
  private number: number;
  private snils: number;

  constructor(name: string, surname: string, age: number, inn: number, number: number, snils: number) {
    super(name, surname, age)
    this.inn = inn;
    this.number = number;
    this.snils = snils
  }

  get getInn() {
    return this.inn
  }

  get getNumber() {
    return this.number
  }

  get getSnils() {
    return this.snils
  }
}

const newEmployee = new Employee("Vadim", "Cherepanov", 34, 23432, 83423, 3434)
console.log(newEmployee.getInn)
