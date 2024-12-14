# Web Crawler

## Description
A simple web crawler that crawls a specified website and generates a report of internal links found during the crawling process.

## Features
- Crawls a website starting from a base URL
- Normalizes and tracks unique URLs
- Handles both absolute and relative links
- Generates a report showing the number of links to each page

## Prerequisites
- Node.js
- npm

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies

## Usage
```bash
npm start [website_url]
```

### Example
```bash
npm start https://example.com
```

## Testing
Run tests using Jest:
```bash
npm test
```

## Dependencies
- JSDOM
- Fetch API
- Jest (for testing)
