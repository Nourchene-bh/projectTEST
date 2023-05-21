// // // const express = require('express');
// // // const router = express.Router();
// // // // const { ref, get } = require('firebase/database');
// // // // const rlattendanceSchema = require('../models/rlattendance');
// // // // const realtimeDb = require('../real');

// // // // router.get('/', async(req, res) => {
// // // //     try {
// // // //         // Read the attendance data from the Realtime Database
// // // //         const attendanceSnapshot = await get(ref(realtimeDb, '/Test Val'));
// // // //         const attendanceData = attendanceSnapshot.val();

// // // //         // Validate the attendance data against the schema
// // // //         const { error, value } = rlattendanceSchema.validate(attendanceData);
// // // //         if (error) {
// // // //             console.error('Invalid attendance data:', error);
// // // //             return res.status(400).json({ error: 'Invalid attendance data' });
// // // //         }

// // // //         // Send the attendance data in the response
// // // //         res.json(value);
// // // //     } catch (error) {
// // // //         console.error('Error retrieving attendance:', error);
// // // //         res.status(500).send('Error retrieving attendance');
// // // //     }
// // // // });

// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();

// // const { ref, get } = require('firebase/database');
// // const realattendanceSchema = require('../models/rlattendance');
// // const realtimeDb = require('../real');

// // router.get('/', async(req, res) => {
// //     try {
// //         // Read the attendance data from the Realtime Database
// //         const attendanceSnapshot = await get(ref(realtimeDb, '/Test Val'));
// //         const attendanceData = attendanceSnapshot.val();

// //         // Validate the attendance data against the schema
// //         const { error, value } = realattendanceSchema.validate(attendanceData);
// //         if (error) {
// //             console.error('Invalid attendance data:', error);
// //             return res.status(400).json({ error: 'Invalid attendance data' });
// //         }

// //         // Send the attendance data in the response
// //         res.json(value);
// //     } catch (error) {
// //         console.error('Error retrieving attendance:', error);
// //         res.status(500).send('Error retrieving attendance');
// //     }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();

// const { ref, get } = require('firebase/database');
// const rlattendanceSchema = require('../models/rlattendance');
// const realtimeDb = require('../real');

// router.get('/', async(req, res) => {
//     try {
//         // Read the attendance data from the Realtime Database
//         const attendanceSnapshot = await get(ref(realtimeDb, '/Test Val'));
//         const attendanceData = attendanceSnapshot.val();

//         // Validate the attendance data against the schema
//         const { error, value } = rlattendanceSchema.validate(attendanceData);
//         if (error) {
//             console.error('Invalid attendance data:', error);
//             return res.status(400).json({ error: 'Invalid attendance data' });
//         }

//         // Send the attendance data in the response
//         res.json(value);
//     } catch (error) {
//         console.error('Error retrieving attendance:', error);
//         res.status(500).send('Error retrieving attendance');
//     }
// });

// module.exports = router;