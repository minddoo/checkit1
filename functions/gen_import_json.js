const crypto = require('crypto');
const fs = require('fs');

const email = "checkit082@gmail.com";
const password = "shmjch3080@@@";

// Generate SHA256 hash of password
const hash = crypto.createHash('sha256').update(password).digest();
// Firebase auth:import expects base64 encoded hash
const passwordHashBase64 = hash.toString('base64');

console.log("Password Hash (Base64):", passwordHashBase64);

// Create JSON for import
// We can use a random or fixed localId (UID). Let's use checkit082_master_uid
const userData = [
    {
        "localId": "checkit082_master_uid",
        "email": email,
        "emailVerified": true,
        "passwordHash": passwordHashBase64,
        "salt": "",
        "displayName": "Master Admin",
        "photoUrl": "",
        "disabled": false
    }
];

fs.writeFileSync('master_user.json', JSON.stringify(userData, null, 4));
console.log("master_user.json generated successfully!");
