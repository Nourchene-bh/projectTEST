const firebase = require('firebase/app');
require('firebase/database');

const realtimeDbConfig = {
    apiKey: "AIzaSyBOiPQrhVhlnSSTxxFU69uKbs1-fG4LzEM",
    authDomain: "doorlock-6cbf4.firebaseapp.com",
    databaseURL: "https://doorlock-6cbf4-default-rtdb.firebaseio.com",
    projectId: "doorlock-6cbf4",
    storageBucket: "doorlock-6cbf4.appspot.com",
    messagingSenderId: "231492444080",
    appId: "1:231492444080:web:6e890590829acbfbfb4075",
    measurementId: "G-N8DF5EL1S9"
};

// Check if the Firebase app with the given name already exists
const existingApp = firebase.apps.find(app => app.name === 'realtime');
const realtimeDbApp = existingApp || firebase.initializeApp(realtimeDbConfig, 'realtime');
const realtime = realtimeDbApp.database();

let isDatabaseConnected = false;
// Check if the Realtime Database is connected
realtime
    .ref('.info/connected')
    .on('value', (snapshot) => {
        const isConnected = snapshot.val();
        if (isConnected) {
            if (!isDatabaseConnected) {
                console.log('Realtime Database connected successfully!');
                isDatabaseConnected = true;
            }
        } else {
            console.log('Realtime Database connection lost.');
            isDatabaseConnected = false;
        }
    });

module.exports = realtime;