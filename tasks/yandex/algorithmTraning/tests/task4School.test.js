const { checkDistance } = require('../task4School.js')

describe('Check Distance', () => {
  test('one house should return coordinate', () => {
    let input = '1'
    let output = 1
    expect(checkDistance(input)).toBe(output)
  })

  test('four house should return coordinate', () => {
    let input = '1 2 3 4'
    let output = 3
    expect(checkDistance(input)).toBe(output)
  })

  test('four house should return coordinate', () => {
    let input = '-1 2 3 4'
    let output = 2
    expect(checkDistance(input)).toBe(output)
  })

  test('four house should return coordinate', () => {
    let input = '-1 -2 -3 -4'
    let output = -3
    expect(checkDistance(input)).toBe(output)
  })
})
