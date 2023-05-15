class User {
  private _user: string;
  private _password: string;
  private _id: number;

  constructor(user: string, password: string) {
    this._user = user;
    this._password = password;
    this._id = this.getrandomId()
  }

  public get username() {
    return this._user
  }

  public get password() {
    return this._password
  }

  public set username(newUser) {
    this._user = newUser
  }

  public set password(newPassword) {
    this._password = newPassword
  }

  public get id() {
    return this._id
  }

  private getrandomId(): number {
    return Math.random() * 100 + 1
  }

}

const user = new User('vadim', '23424')
console.log(user.username)
console.log(user.password)
console.log(user.id)

user.username = "hello"
console.log(user.username)
