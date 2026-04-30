const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // 만약 있다면

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: 'checkit-43341'
    });
}

const db = admin.firestore();

async function checkRecentMessage() {
    try {
        const msgSnap = await db.collection('messages').orderBy('timestamp', 'desc').limit(1).get();
        if (msgSnap.empty) {
            console.log('No messages found');
            return;
        }
        const msgData = msgSnap.docs[0].data();
        console.log('--- Recent Message ---');
        console.log('Worker ID:', msgData.workerDocId);
        
        const workerSnap = await db.collection('workers').doc(msgData.workerDocId).get();
        if (!workerSnap.exists) {
            console.log('Worker not found in DB');
        } else {
            console.log('--- Worker Data ---');
            console.log(JSON.stringify(workerSnap.data(), null, 2));
        }
    } catch (e) {
        console.error(e);
    }
}

checkRecentMessage();
