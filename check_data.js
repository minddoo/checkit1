const admin = require('firebase-admin');
const serviceAccount = require('./checkit-43341-firebase-adminsdk-fbsvc-288b617990.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkLastDoc() {
  const snap = await db.collection('scheduled_notifications').orderBy('submittedAt', 'desc').limit(2).get();
  snap.forEach(doc => {
      console.log("Doc ID:", doc.id);
      console.log("Data:", JSON.stringify(doc.data(), null, 2));
  });
  process.exit(0);
}
checkLastDoc();
