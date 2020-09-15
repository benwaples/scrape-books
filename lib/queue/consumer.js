const { taskQueue } = require('./queue');

taskQueue.process(7, `${__dirname}/scraper-worker.js`);
