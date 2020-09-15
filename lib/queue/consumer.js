const { taskQueue, storeQueue } = require('./queue');

taskQueue.process(7, `${__dirname}/scraper-worker.js`);
taskQueue.on('completed', job => {
  storeQueue.add({ books: job.returnvalue });
});

storeQueue.process(7, `${__dirname}/store-worker.js`);

