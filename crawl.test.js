const {normalizeURL, getURSLsFromHTML} =  require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip https', () => {
  const input = 'https://roadmap.sh/path'
  const actual = normalizeURL(input)
  const expected = 'roadmap.sh/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
  const input = 'http://roadmap.sh/path'
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

test('getURSLsFromHTML absolute', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="https://roadmap.sh">
          roadmap.sh
        </a>
      </body>
    </html>
  `
  const inputBaseURL = "https://roadmap.sh"
  const actual = getURSLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://roadmap.sh/']
  expect(actual).toEqual(expected)
})

test('getURSLsFromHTML relative', () => {
  const inputHTMLBody = `
    <html>
      <body>
      <a href="https://roadmap.sh/path1/">
          roadmap.sh pathe one
        </a>
        <a href="/path2/">
          roadmap.sh path two
        </a>
      </body>
    </html>
  `
  const inputBaseURL = "https://roadmap.sh"
  const actual = getURSLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://roadmap.sh/path1/', 'https://roadmap.sh/path2/']
  expect(actual).toEqual(expected)
})

test('getURSLsFromHTML both', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="/path/">
          roadmap.sh
        </a>
      </body>
    </html>
  `
  const inputBaseURL = "https://roadmap.sh"
  const actual = getURSLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://roadmap.sh/path/']
  expect(actual).toEqual(expected)
})


test('getURSLsFromHTML invalid', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="invalid">
          Invalid
        </a>
      </body>
    </html>
  `
  const inputBaseURL = "https://roadmap.sh"
  const actual = getURSLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = []
  expect(actual).toEqual(expected)
})