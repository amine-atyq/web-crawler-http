const {normalizeURL} =  require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip https', () => {
  const input = 'https://roadmap.sh/path'
  const actual = normalizeURL(input)
  const expected = 'roadmap.sh/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
  const input = 'https://roadmap.sh/path'
  const actual = normalizeURL(input)
  const expected = 'roadmap.sh/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
  const input = 'https://roadmap.sh/path/'
  const actual = normalizeURL(input)
  const expected = 'roadmap.sh/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL ignore capitals', () => {
  const input = 'https://ROADMAP.sh/path'
  const actual = normalizeURL(input)
  const expected = 'roadmap.sh/path'
  expect(actual).toEqual(expected)
})