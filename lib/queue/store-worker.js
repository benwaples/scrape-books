const store = require('../store');

module.exports = job => {
  console.log('about to store page in the database');
  return store(job.data.books);
};
