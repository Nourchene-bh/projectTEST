// const db = require('../db');
// const Joi = require('@hapi/joi');
const db = require('../db');
const Joi = require('@hapi/joi');
const attendanceschema = Joi.object({
    Name: Joi.string().required(),
    last: Joi.string().required(),
    level: Joi.string().required(),
    is_present: Joi.boolean().required(),

});
const attendance = db.collection('attendance');

module.exports = {
    attendance,
    attendanceschema
};
// const attendanceschema = Joi.object({
//     Name: Joi.string().required(),
//     last: Joi.string().required(),
//     level: Joi.string().required(),
//     is_present: Joi.boolean().required(),
// });
// const attendanceschema = Joi.object({
//     Name: Joi.string().required(),
//     last: Joi.string().required(),
//     level: Joi.string().required(),
//     is_present: Joi.boolean().required(),
// });

// const attendanceRef = firestoreDb.collection('attendance').doc('DOCUMENT_ID');

// attendanceRef.get()
//     .then(docSnapshot => {
//         const docData = docSnapshot.data();
//         const validationResult = attendanceschema.validate(docData);
//         if (validationResult.error) {
//             console.error(validationResult.error);
//         } else {
//             console.log('Validation successful!');
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });

// // const attendance = db.collection('attendance');
// // const rtDbRef = db.ref('/Test Value');

// // async function markAttendance(name, last, level) {
// //     const attendanceQuery = attendance.where('Name', '==', name);
// //     const attendanceQuerySnapshot = await attendanceQuery.get();

// //     if (attendanceQuerySnapshot.empty) {
// //         throw new Error('No matching document found in Firestore');
// //     }

// //     const attendanceData = attendanceQuerySnapshot.docs[0].data();
// //     const attendanceId = attendanceQuerySnapshot.docs[0].id;
// //     const { is_present: attendanceIsPresent } = attendanceData;

// //     if (!attendanceIsPresent) {
// //         await attendance.doc(attendanceId).update({
// //             is_present: true,
// //         });
// //     }
// // }


// // module.exports = {
// //     attendance,
// //     attendanceschema,
// //     markAttendance,
// //     markAllAttendance,
// // };
// const Joi = require('joi');
// const firestore = require('../db'); // assuming the firestore config file is named db.js and located in the same directory
// const database = require('../real'); // assuming the realtime database config file is named real.js and located in the same directory

// const attendanceSchema = Joi.object({
//     Name: Joi.string().required(),
//     last: Joi.string().required(),
//     level: Joi.string().required(),
//     is_present: Joi.boolean().required(),
// });

// const attendanceCollection = db.collection('attendance');

// // Get a reference to the Realtime Database
// const realdb = require('./real');

// // Read data from the Realtime Database
// realdb.ref('/Test Value/Value').once('value')
//     .then(snapshot => {
//         const value = snapshot.val();

//         // Query Firestore for all documents in the attendance collection
//         attendanceCollection.get()
//             .then(querySnapshot => {
//                 querySnapshot.forEach(doc => {
//                     const attendance = doc.data();

//                     // Compare the name field with the value from the Realtime Database
//                     if (attendance.Name === value) {
//                         // Update the is_present field to true
//                         attendanceCollection.doc(doc.id).update({
//                                 is_present: true
//                             })
//                             .then(() => {
//                                 console.log('Attendance updated successfully');
//                             })
//                             .catch(error => {
//                                 console.error('Error updating attendance:', error);
//                             });
//                     }
//                 });
//             })
//             .catch(error => {
//                 console.error('Error getting attendance documents:', error);
//             });
//     })
//     .catch(error => {
//         console.error('Error getting value from Realtime Database:', error);
//     });