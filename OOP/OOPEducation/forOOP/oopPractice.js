var User = /** @class */ (function () {
    function User(user, password) {
        this._user = user;
        this._password = password;
        this._id = this.getrandomId();
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._user;
        },
        set: function (newUser) {
            this._user = newUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (newPassword) {
            this._password = newPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getrandomId = function () {
        return Math.random() * 100 + 1;
    };
    return User;
}());
var user = new User('vadim', '23424');
console.log(user.username);
console.log(user.password);
console.log(user.id);
user.username = "hello";
console.log(user.username);
