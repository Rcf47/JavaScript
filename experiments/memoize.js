export function memoize(callback) {
  let cache = new Map()
  return function(...args) {
    let key = args.join("_")
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = callback(...args)
    cache.set(key, result)
    return result
  }
}

let callCount = 0

const memoizeFn = memoize(function(a, b) {
  callCount++
  return a * b
})

console.log(memoizeFn(2, 3)) // 6
console.log(memoizeFn(2, 3)) //9
//console.log(memoizeFn(2, 3)) // 6
//console.log(memoizeFn(2, 3)) // 6

console.log(`CallCount is: ${callCount}`)
