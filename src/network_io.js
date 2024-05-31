const https = require('https');

// process.env.UV_THREADPOOL_SIZE = 4
const MAX_CALLS = 40;

const st = Date.now();
for (let i=0; i<MAX_CALLS; i++) {
    https.request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Request: ${i+1}`, Date.now() - st);
        });
    }).end();
}
