import { findShufflingProbabilities, shuffling } from "../../src/logic/shuffling"

describe('Shuffling should return correct array and length of array should equal theory permutation', () => {
    it('case 1', () => {
      const result = shuffling('a')
      
      expect(result).toStrictEqual(['a'])
      expect(result.length).toBe(findShufflingProbabilities('a'))
    })
    it('case 2', () => {
      const result = shuffling('ab')
      
      expect(result).toStrictEqual(['ab', 'ba'])
      expect(result.length).toBe(findShufflingProbabilities('ab'))
    })
    it('case 3', () => {
      const result = shuffling('abc')
      
      expect(result).toStrictEqual(['abc','acb','bac','bca','cab','cba'])
      expect(result.length).toBe(findShufflingProbabilities('abc'))
    })
    it('case 4', () => {
      const result = shuffling('aabb')
      
      expect(result).toStrictEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
      expect(result.length).toBe(findShufflingProbabilities('aabb'))
    })
})
