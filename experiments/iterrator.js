const object = {
  *[Symbol.iterator]() {
    yield 'Hello'
    yield 'World'
  }
}

for (const hello of object) {
  console.log(hello)
}

const object2 = { name: 'Vadim', age: 35 }

const entries = Object.entries(object2)

const objArr = [...entries]

const set = new Set([4, 8, 15, 16, 23, 42])

const setArray = [...set]

function* generator3() {
  const value = yield 'Hello'

  const value2 = yield 42 + value
  yield 10 + value2
}

const iterator2 = generator3()

function* generator3() {
  yield 'Hello'
  yield 'World'

  return 'my world'
}

const iterator3 = generator3()
console.log(iterator3.next())
console.log(iterator3.next())
console.log(iterator3.next())
