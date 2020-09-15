const request = require('../request');
const parse = require('../parse');
const store = require('../store');

module.exports = job => {
  console.log(`about to scrape page ${job.data.page} for books`);
  return request(job.data.page)
    .then(parse)
    .then(store);
};
