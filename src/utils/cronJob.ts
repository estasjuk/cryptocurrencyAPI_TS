const cron = require('node-cron');
const { addCrypto } = require('../controllers/postDbControllers')


export const job = cron.schedule("*/5 * * * *", 
async function (): Promise<void> {
    await addCrypto();
},
    {
    start: true,
    timeZone: 'Europe/Kiev'
    },
);