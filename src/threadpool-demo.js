const crypto = require('crypto')

//
process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 16

const st = Date.now()
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// const val = crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

for(let i=0; i<MAX_CALLS; i++){
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log("Hash", Date.now() - st);
    });
}
