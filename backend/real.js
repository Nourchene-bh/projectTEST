// // const firebase = require('firebase/app');
// // require('firebase/database');

// // const realtimeDbConfig = {
// //     apiKey: "AIzaSyCCJqAdEfYq4yuUsZfQrjZ7ImQPT5vPOyI",
// //     authDomain: "face-recognition-aacf8.firebaseapp.com",
// //     databaseURL: "https://face-recognition-aacf8-default-rtdb.europe-west1.firebasedatabase.app",
// //     projectId: "face-recognition-aacf8",
// //     storageBucket: "face-recognition-aacf8.appspot.com",
// //     messagingSenderId: "666449496112",
// //     appId: "1:666449496112:web:ec8ee18370040e4f1645f5",
// //     measurementId: "G-TG80MFDMP0"
// // };

// // // Initialize Firebase
// // const realtimeDbApp = firebase.initializeApp(realtimeDbConfig, 'realtimeDb');
// // const realtimeDb = realtimeDbApp.database();

// // module.exports = realtimeDb;
// // const firebase = require('firebase/app');
// // require('firebase/database');

// // const firebaseConfig = {
// // apiKey: "AIzaSyCCJqAdEfYq4yuUsZfQrjZ7ImQPT5vPOyI",
// //     authDomain: "face-recognition-aacf8.firebaseapp.com",
// //     databaseURL: "https://face-recognition-aacf8-default-rtdb.europe-west1.firebasedatabase.app",
// //     projectId: "face-recognition-aacf8",
// //     storageBucket: "face-recognition-aacf8.appspot.com",
// //     messagingSenderId: "666449496112",
// //     appId: "1:666449496112:web:ec8ee18370040e4f1645f5",
// //     measurementId: "G-TG80MFDMP0"
// // };

// // // Initialize Firebase
// // const realtimeDbApp = firebase.initializeApp(realtimeDbConfig, 'realtimeDb');
// // const realtimeDb = realtimeDbApp.database();

// // // Get the Realtime Database instance
// // // const realtimeDb = firebase.database();

// // module.exports = realtimeDb;
// const firebase = require('firebase/app');
// require('firebase/database');

// const realtimeDbConfig = {
//     apiKey: "AIzaSyCCJqAdEfYq4yuUsZfQrjZ7ImQPT5vPOyI",
//     authDomain: "face-recognition-aacf8.firebaseapp.com",
//     databaseURL: "https://face-recognition-aacf8-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "face-recognition-aacf8",
//     storageBucket: "face-recognition-aacf8.appspot.com",
//     messagingSenderId: "666449496112",
//     appId: "1:666449496112:web:ec8ee18370040e4f1645f5",
//     measurementId: "G-TG80MFDMP0"
// };

// // Initialize Firebase
// const realtimeDbApp = firebase.initializeApp(realtimeDbConfig, 'realtimeDb');
// const realtimeDb = realtimeDbApp.database();

// // Check if the Realtime Database is connected
// realtimeDb
//     .ref('.info/connected')
//     .on('value', (snapshot) => {
//         if (snapshot.val() === true) {
//             console.log('Realtime Database connected successfully!');
//         } else {
//             console.log('Realtime Database connection lost.');
//         }
//     });

// module.exports = realtimeDb;
// const firebase = require('firebase/app');
// require('firebase/database');

// Initialize Firebase app


// Initialize the Firebase app
// firebase.initializeApp(firebaseConfig);
// const firebase = require('firebase/app');
// require('firebase/database');

// // Check if the Firebase app has already been initialized
// if (!firebase.apps.length) {
//     const firebaseConfig = {
//         apiKey: "AIzaSyCCJqAdEfYq4yuUsZfQrjZ7ImQPT5vPOyI",
//         authDomain: "face-recognition-aacf8.firebaseapp.com",
//         databaseURL: "https://face-recognition-aacf8-default-rtdb.europe-west1.firebasedatabase.app",
//         projectId: "face-recognition-aacf8",
//         storageBucket: "face-recognition-aacf8.appspot.com",
//         messagingSenderId: "666449496112",
//         appId: "1:666449496112:web:ec8ee18370040e4f1645f5",
//         measurementId: "G-TG80MFDMP0"
//     };

//     // Initialize the Firebase app
//     firebase.initializeApp(firebaseConfig);
// }

// const realtimeDb = firebase.database();

// // Check if the Realtime Database is connected
// realtimeDb
//     .ref('.info/connected')
//     .on('value', (snapshot) => {
//         if (snapshot.val() === true) {
//             console.log('Realtime Database connected successfully!');
//         } else {
//             console.log('Realtime Database connection lost.');
//         }
//     });

// module.exports = realtimeDb;
const firebase = require('firebase/app');
require('firebase/database');
const db = require('./db');
const realtimeDbConfig = {
    apiKey: "AIzaSyCCJqAdEfYq4yuUsZfQrjZ7ImQPT5vPOyI",
    authDomain: "face-recognition-aacf8.firebaseapp.com",
    databaseURL: "https://face-recognition-aacf8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "face-recognition-aacf8",
    storageBucket: "face-recognition-aacf8.appspot.com",
    messagingSenderId: "666449496112",
    appId: "1:666449496112:web:ec8ee18370040e4f1645f5",
    measurementId: "G-TG80MFDMP0"
};

// Initialize Firebase
const realtimeDbApp = firebase.initializeApp(realtimeDbConfig, 'realtimeDb');
const realtimeDb = realtimeDbApp.database();

let isDatabaseConnected = false;
// Check if the Realtime Database is connected
realtimeDb
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



module.exports = realtimeDb;
// module.exports = realtimeDb;
realtimeDb.ref().once('value')
    .then((snapshot) => {
        const realTimeData = snapshot.val();

        const firestorePromises = [];

        // Retrieve data from Firestore
        db.collection('attendance').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const firestoreData = doc.data();
                    const value = firestoreData.Name;

                    // Compare the data
                    for (const key in realTimeData) {
                        if (
                            realTimeData.hasOwnProperty(key) &&
                            realTimeData[key].Value === value
                        ) {
                            // Match found, update the 'is_present' field in Firestore
                            const updatePromise = doc.ref.update({ is_present: true })
                                .then(() => {
                                    console.log(`Updated document with ID: ${doc.id}`);
                                })
                                .catch((error) => {
                                    console.error(`Error updating document with ID: ${doc.id}`, error);
                                });

                            firestorePromises.push(updatePromise);

                            break; // Exit the loop since we found a match
                        }
                    }
                });

                // Wait for all Firestore updates to complete
                return Promise.all(firestorePromises);
            })
            .then(() => {
                console.log('All Firestore updates completed successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
    .catch((error) => {
        console.error('Error:', error);
    });