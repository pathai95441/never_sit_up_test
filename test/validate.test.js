import { isHasArgumentInput } from "../src/validate"

describe('splitStringToArray', () => {
    it('case 1', () => {
      expect(isHasArgumentInput(':), ;(, ;}, :-D')).toBe(true)
    })
    it('case 2', () => {
      expect(isHasArgumentInput('')).toBe(false)
    })
  })