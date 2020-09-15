const request = require('../request');
const parse = require('../parse');

module.exports = job => {
  console.log(`about to scrape page ${job.data.page} for books`);
  return request(job.data.page)
    .then(parse);
};
