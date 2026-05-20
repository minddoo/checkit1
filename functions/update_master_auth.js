const admin = require('firebase-admin');

// Initialize admin SDK using application default credentials (from Firebase CLI)
admin.initializeApp({
    projectId: "checkit-43341"
});

const email = "checkit082@gmail.com";
const password = "shmjch3080@@@";

async function run() {
    try {
        console.log(`Checking user: ${email}...`);
        let user;
        try {
            user = await admin.auth().getUserByEmail(email);
            console.log(`User exists with UID: ${user.uid}. Updating password...`);
            await admin.auth().updateUser(user.uid, {
                password: password,
                emailVerified: true
            });
            console.log("Password updated successfully!");
        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                console.log("User does not exist. Creating user...");
                user = await admin.auth().createUser({
                    email: email,
                    password: password,
                    emailVerified: true,
                    displayName: "Master Admin"
                });
                console.log(`User created successfully with UID: ${user.uid}`);
            } else {
                throw err;
            }
        }
        process.exit(0);
    } catch (error) {
        console.error("Error executing script:", error);
        process.exit(1);
    }
}

run();
