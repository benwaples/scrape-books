const request = require('./request');
const parse = require('./parse');
const store = require('./store');

request()
  .then(html => parse(html))
  .then(books => store(books))
  .then(processedBooks => console.log(processedBooks.length));





