let user = {
  name: "Vadim",
  surname: "Cherepanov"
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

console.log(JSON.stringify(descriptor, null, 2))
// console.log(`descriptor is ${descriptor}`)

Object.defineProperty(user, 'name', {
  writable: false
})

user.name = 'Sasha'
console.log(user.name)
