var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getSurname", {
        get: function () {
            return this.surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "newName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "newSurname", {
        set: function (surname) {
            this.surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "newAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, inn, number, snils) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.inn = inn;
        _this.number = number;
        _this.snils = snils;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "getInn", {
        get: function () {
            return this.inn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getNumber", {
        get: function () {
            return this.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getSnils", {
        get: function () {
            return this.snils;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));
var newEmployee = new Employee("Vadim", "Cherepanov", 34, 23432, 83423, 3434);
console.log(newEmployee.getInn);
