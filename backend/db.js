const firebase = require('firebase/app');
require('firebase/firestore');

const firestoreConfig = {
    apiKey: "AIzaSyD_osGmK1PzFczBkuvXcBB41w4TxEvrB9k",
    authDomain: "pfeproject-39bf0.firebaseapp.com",
    projectId: "pfeproject-39bf0",
    storageBucket: "pfeproject-39bf0.appspot.com",
    messagingSenderId: "90510048576",
    appId: "1:90510048576:web:646d1926ed4fe503b70ea5",
    measurementId: "G-NFQTYP8FNG"
};

// Initialize Firebase
firebase.initializeApp(firestoreConfig);

// Get a Firestore instance
const db = firebase.firestore();

module.exports = db;