import { convertStringArrayToArray, factorial, splitStringToArray } from "../src/util"

describe('factorial', () => {
    it('case 1', () => {
      expect(factorial(1)).toBe(1)
    })
    it('case 2', () => {
      expect(factorial(2)).toBe(2)
    })
    it('case 3', () => {
      expect(factorial(-1)).toBe(-1)
    })
    it('case 4', () => {
      expect(factorial(0)).toBe(1)
    })
    it('case 5', () => {
      expect(factorial(5)).toBe(120)
    })
})

describe('convertStringArrayToArray', () => {
  it('case 1', () => {
    expect(convertStringArrayToArray("[1,2,2,3,3,3,4,3,3,3,2,2,1]")).toStrictEqual([1,2,2,3,3,3,4,3,3,3,2,2,1])
  })
  it('case 2', () => {
    expect(convertStringArrayToArray("[1,2,2,3,3,3,4,3,1]")).toStrictEqual([1,2,2,3,3,3,4,3,1])
  })
  it('case 3', () => {
    expect(convertStringArrayToArray("[1]")).toStrictEqual([1])
  })
  it('case 4', () => {
    expect(convertStringArrayToArray("[]")).toStrictEqual([])
  })
  it('case 5', () => {
    try {
      convertStringArrayToArray("[]asdxzc")
    } catch (error) {
      expect(error.toString()).toBe("Error: Invalid Input Is Not Array")
    }
  })
})

describe('splitStringToArray', () => {
  it('case 1', () => {
    expect(splitStringToArray(':), ;(, ;}, :-D')).toStrictEqual([':)', ';(', ';}', ':-D'])
  })
  it('case 2', () => {
    expect(splitStringToArray(';D, :-(, :-), ;~)')).toStrictEqual([';D', ':-(', ':-)', ';~)'])
  })
})