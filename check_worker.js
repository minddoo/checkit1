const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// If serviceAccountKey.json doesn't exist, we might need to use application default credentials
// or just use a simple script that assumes it's running in an environment with access.
// Since I don't have the key, I'll try to find it in the functions folder if it exists.

admin.initializeApp({
  projectId: 'checkit-43341'
});

const db = admin.firestore();

async function checkWorker() {
  const snap = await db.collection('workers').where('name', '==', '김선홍').get();
  if (snap.empty) {
    console.log('Worker 김선홍 not found');
    return;
  }
  snap.forEach(doc => {
    console.log('Worker Data:', JSON.stringify(doc.data(), null, 2));
  });
}

checkWorker();
