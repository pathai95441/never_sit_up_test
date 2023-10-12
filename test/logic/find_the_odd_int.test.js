import { ARRAY_NOT_HAVE_OCCURS_ODD_TIME } from "../../src/const"
import { findTheOddInt } from "../../src/logic/find_the_odd_int"


describe('find The Odd Int should return number of odd occur time', () => {
    it('case 1', () => {
      const result = findTheOddInt([7])
      
      expect(result.number).toBe(7)
      expect(result.frequency).toBe(1)
    })
    
    it('case 2', () => {
        const result = findTheOddInt([0])
        
        expect(result.number).toBe(0)
        expect(result.frequency).toBe(1)
    })
    
    it('case 3', () => {
        const result = findTheOddInt([1,1,2])
        
        expect(result.number).toBe(2)
        expect(result.frequency).toBe(1)
    })
    
    it('case 4', () => {
        const result = findTheOddInt([0,1,0,1,0])
        
        expect(result.number).toBe(0)
        expect(result.frequency).toBe(3)
    })

    it('case 5', () => {
        const result = findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])
        
        expect(result.number).toBe(4)
        expect(result.frequency).toBe(1)
    })
    
    it('not have number of odd occur', () => {
        const result = findTheOddInt([1,2,2,3,3,3,4,4,3,3,3,2,2,1])
        
        expect(result).toBe(ARRAY_NOT_HAVE_OCCURS_ODD_TIME)
    })
})
