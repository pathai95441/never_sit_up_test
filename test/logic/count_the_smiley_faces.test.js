import { countTheSmileyFaces, isSmile } from "../../src/logic/count_the_smiley_faces"

describe('Count The Smiley Faces should return count valid smile', () => {
    it('case 1', () => {
      expect(countTheSmileyFaces([':)', ';(', ';}', ':-D'])).toBe(2)
    })
    it('case 2', () => {
      expect(countTheSmileyFaces([';D', ':-(', ':-)', ';~)'])).toBe(3)
    })
    it('case 3', () => {
      expect(countTheSmileyFaces([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
    })
    it('case 4', () => {
      expect(countTheSmileyFaces([';]', ':[', ';*', ':$'])).toBe(0)
    })
})

describe('Is smile should return true when last character equal "D" or ")" ', () => {
  it('case 1', () => {
    expect(isSmile(";D")).toBe(true)
  })
  it('case 2', () => {
    expect(isSmile(";)")).toBe(true)
  })
  it('case 3', () => {
    expect(isSmile(";]")).toBe(false)
  })
  it('case 4', () => {
    expect(isSmile(":[")).toBe(false)
  })
  it('case 5', () => {
    expect(isSmile(";*")).toBe(false)
  })
  it('case 6', () => {
    expect(isSmile(":$")).toBe(false)
  })
  it('case 7', () => {
    expect(isSmile(";-D")).toBe(true)
  })
})