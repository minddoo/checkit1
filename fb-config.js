// Firebase Config for CHECKIT
const firebaseConfig = {
    apiKey: "AIzaSyDAdW_vJHUHuDaun2Kh94uC8ywlfOdyPco",
    authDomain: "checkit-43341.firebaseapp.com",
    projectId: "checkit-43341",
    storageBucket: "checkit-43341.appspot.com",
    messagingSenderId: "818434232492",
    appId: "1:818434232492:web:713836b01fc11196150f09"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();
