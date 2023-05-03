const { checkDate } = require('../task3Date.js')

describe('checkDate', () => {
  test('should return 0 for valid date', () => {
    const input = '1 1 2003'
    const output = 0
    expect(checkDate(input)).toBe(output)
  })

  test('should return 1 for invalid date', () => {
    const input = '13 1 2003'
    const output = 1
    expect(checkDate(input)).toBe(output)

  })
  test('should return 1 for invalid date', () => {
    const input = '10 21 2003'
    const output = 1
    expect(checkDate(input)).toBe(output)
  })

  test('should return 1 for invalid date', () => {
    const input = '12 12 2003'
    const output = 1
    expect(checkDate(input)).toBe(output)
  })
})
