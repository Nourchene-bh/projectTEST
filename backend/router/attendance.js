const express = require('express');
const router = express.Router();
const matiereschema = require('../models/matiere').matiereschema;
const { attendanceschema, attendance, markAttendance } = require('../models/attendance');
module.exports = (db) => { // Receive the db object as a parameter
    const attendance = db.collection("attendance");

    router.get('/', async(req, res) => {
        try {
            const attendances = await attendance.get();
            const attendanceArray = attendances.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const result = await Promise.all(attendanceArray.map(async(attendance) => {
                const subject = [];

                // Loop through the subject array and get the subject name and reference
                for (let i = 0; i < attendance.subject.length; i++) {
                    const subjectRef = attendance.subject[i];
                    const subjectDoc = await subjectRef.get();
                    const subjectName = subjectDoc.data().Name;
                    subject.push({ name: subjectName });
                }


                const updatedattendance = {...attendance, subject: subject };
                return updatedattendance;
            }));

            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    });
    router.put('/:id', async(req, res) => {
        try {
            const { id } = req.params;

            // Check if the attendance exists
            const doc = await attendance.doc(id).get();
            if (!doc.exists) {
                return res.status(404).json({ error: 'Attendance not found' });
            }

            // Update the is_present attribute to false
            await attendance.doc(id).update({ is_present: false });

            return res.status(200).json({ message: 'Attendance updated successfully' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server Error' });
        }
    });

    return router;

};