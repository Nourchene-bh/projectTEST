const express = require('express');
const router = express.Router();
const { attendanceschema, attendance, markAttendance } = require('../models/attendance');
module.exports = (db) => { // Receive the db object as a parameter
    const attendance = db.collection("attendance");
    //     //     router.get('/', async(req, res) => {
    //     //         try {
    //     //             // Get the attendance list from Firestore
    //     //             const snapshot = await attendance.get();
    //     //             const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //     //             // Filter the attendance list by a specific level
    //     //             const filteredList = list.filter((item) => item.level === req.query.level);

    //     //             // Loop through the filtered attendance list and update the is_present field
    //     //             for (const { Name, last, level }
    //     //                 of filteredList) {
    //     //                 try {
    //     //                     // Call the markAttendance function to update the is_present field if necessary
    //     //                     await markAttendance(Name, last, level);
    //     //                 } catch (err) {
    //     //                     console.error(err);
    //     //                 }
    //     //             }

    //     //             res.send(filteredList);
    //     //         } catch (err) {
    //     //             console.error(err);
    //     //             res.status(500).send('Error ' + err);
    //     //         }
    //     //     });
    //     // const { attendance, markAllAttendance } = require('../models/attendance');
    //     // const express = require('express');
    //     // const router = express.Router();
    //     // router.get('/', async(req, res) => {
    //     //     try {
    //     //         // Call markAllAttendance to update the is_present field
    //     //         await markAllAttendance();

    //     //         // Get the attendance data from Firestore
    //     //         const snapshot = await firestore.collection('attendance').get();
    //     //         const data = snapshot.docs.map((doc) => doc.data());

    //     //         res.status(200).json(data);
    //     //     } catch (error) {
    //     //         console.error(error);
    //     //         res.status(500).send('Internal server error');
    //     //     }
    //     // });

    //     // module.exports = router;
    //     // const attendanceController = require('../models/attendance');
    //     // const { markAttendance } = require('../models/attendance');
    //     // const attendanceModel = require('../models/attendance');
    //     // const { attendance } = require('../models/attendance');

    //     // module.exports = (db) => { // Receive the db object as a parameter
    //     //     const attendance = db.collection("attendance");


    router.get('/', async(req, res, next) => {
        try {
            const snapshot = await attendance.get();
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.json(data);
        } catch (error) {
            console.error(error);
            next(error);
        }
    });
    //     // router.get('/', async(req, res, next) => {
    //     //     try {
    //     //         const querySnapshot = await attendance.get();
    //     //         if (querySnapshot.empty) {
    //     //             res.status(404).send('Attendance data not found.');
    //     //         } else {
    //     //             const attendanceData = [];
    //     //             querySnapshot.forEach((doc) => {
    //     //                 const data = doc.data();
    //     //                 attendanceData.push({
    //     //                     id: doc.id,
    //     //                     Name: data.Name,
    //     //                     last: data.last,
    //     //                     level: data.level,
    //     //                     is_present: data.is_present,
    //     //                 });
    //     //             });
    //     //             res.status(200).send(attendanceData);
    //     //         }
    //     //     } catch (error) {
    //     //         console.error(error);
    //     //         res.status(500).send('Internal server error.');
    //     //     }
    //     // });
    //     // router.get('/', async(req, res) => {
    //     //     try {
    //     //         const snapshot = await attendance.get();
    //     //         const data = snapshot.docs.map(doc => doc.data());
    //     //         res.status(200).json(data);
    //     //     } catch (error) {
    //     //         console.error(error);
    //     //         res.status(500).send('Server Error');
    //     //     }
    //     // });






    //     // module.exports = {
    //     //     attendanceController: router
    //     // };

    //     // router.get('/', async(req, res) => {
    //     //     try {
    //     //         const attendanceSnapshot = await attendance.get();
    //     //         const attendanceList = attendanceSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //     //         // Get data from realtime database
    //     //         const realtimeRef = firebase.database().ref('Test Val');
    //     //         realtimeRef.once('value', (snapshot) => {
    //     //             const realtimeData = snapshot.val();
    //     //             const nameToCompare = realtimeData.Value;

    //     //             // Update the attendance records based on the comparison with the realtime data
    //     //             attendanceList.forEach(async(attendanceRecord) => {
    //     //                 if (attendanceRecord.Name === nameToCompare) {
    //     //                     await attendance.doc(attendanceRecord.id).update({ is_present: true });
    //     //                 }
    //     //             });

    //     //             res.send(attendanceList);
    //     //         });
    //     //     } catch (err) {
    //     //         res.send('Error ' + err);
    //     //     }
    //     // });
    //     // router.get('/', async(req, res) => {
    //     //     try {
    //     //         const snapshot = await attendance.get();
    //     //         const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //     //         res.send(list);
    //     //     } catch (err) {
    //     //         res.send('Error ' + err);
    //     //     }
    //     // });
    return router;
};
// const express = require('express');
// const router = express.Router();

// const attendance = require('../models/attendance');

// router.get('/', (req, res) => {
//     attendance.getAll()
//         .then((attendances) => {
//             res.json(attendances);
//         })
//         .catch((error) => {
//             console.error('Error getting attendances:', error);
//             res.status(500).send('Error getting attendances');
//         });
// });

// module.exports = router;