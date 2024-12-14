const {sortPages} =  require('./report.js')
const {test, expect} = require('@jest/globals')

test('sortPages 2 pages', () => {
  const input = {
    'https://roadmap.sh/path': 1,
    'https://roadmap.sh': 3
  }
  const actual = sortPages(input)
  const expected = [
    ['https://roadmap.sh', 3],
    ['https://roadmap.sh/path', 1]
  ]
  
  expect(actual).toEqual(expected)
})

test('sortPages 2 pages', () => {
  const input = {
    'https://roadmap.sh': 3,
    'https://roadmap.sh/path1': 4,
    'https://roadmap.sh/path2': 2,
    'https://roadmap.sh/path3': 6,
    'https://roadmap.sh/path4': 8
  }
  const actual = sortPages(input)
  const expected = [
    ['https://roadmap.sh/path4', 8],
    ['https://roadmap.sh/path3', 6],
    ['https://roadmap.sh/path1', 4],
    ['https://roadmap.sh', 3],
    ['https://roadmap.sh/path2', 2]
  ]
  
  expect(actual).toEqual(expected)
})