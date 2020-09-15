const Queue = require('bull');


const taskQueue = new Queue('tasks', {
  redis: process.env.REDIS_URL
});

const storeQueue = new Queue('store', {
  redis: process.env.REDIS_URL
});

module.exports = {
  taskQueue,
  storeQueue
};

