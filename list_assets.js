const fs = require('fs');
fs.readdirSync('assets').forEach(file => {
    console.log(`${file} -> ${Buffer.from(file).toString('hex')}`);
});
