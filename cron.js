const nodeCron = require('node-cron');
const job = nodeCron.schedule('*/10 * * * * *', () => {
  console.log(new Date().toLocaleString());
});
