const express = require('express');
const router = express.Router();
const { studentschema } = require('../models/students');
// const { levelschema } = require('../models/level');
const levelschema = require('../models/level').levelschema;
const classroomschema = require('../models/classrooms').classroomschema;
// const { validate } = require('../utils/validation');
// const { validate } = require('../utils/validation');
module.exports = (db) => { // Receive the db object as a parameter
    const Student = db.collection("students");

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Student.get();
    //         const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //         res.send(list);
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Student.get();
    //         const list = snapshot.docs.map(async(doc) => {
    //             const studentData = doc.data();
    //             const levelRef = studentData.level;
    //             const levelDoc = await levelRef.get();
    //             const levelData = levelDoc.data();
    //             return { id: doc.id, Name: studentData.Name, level: levelData };
    //         });
    //         res.send(await Promise.all(list));
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const students = await Student.get();
    //         const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             studentArray.map(async(student) => {
    //                 const levelRef = student.level;
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();

    //                 const subjects = [];
    //                 if (levelData.subject && levelData.subject.length > 0) {
    //                     for (let j = 0; j < levelData.subject.length; j++) {
    //                         const subjectRef = levelData.subject[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();

    //                         subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                     }
    //                 }

    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();

    //                         subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                     }
    //                 }

    //                 const updatedStudent = { Name: student.Name, level: levelData.level, subjects: subjects };
    //                 return updatedStudent;
    //             })
    //         );

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const students = await Student.get();
    //         const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             studentArray.map(async(student) => {
    //                 const levelRef = student.level;
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();

    //                 const subjectRefs = levelData.subject || [];
    //                 const subject2Refs = levelData.subject2 || [];
    //                 const subjectDocs = await Promise.all([...subjectRefs, ...subject2Refs].map((subjectRef) => subjectRef.get()));
    //                 const subjects = subjectDocs.map((subjectDoc) => {
    //                     const subjectData = subjectDoc.data();
    //                     return { name: subjectData.Name, matiere: subjectData.matiere };
    //                 });

    //                 const classroomRefs = student.classroomname || [];
    //                 const classroomDocs = await Promise.all(classroomRefs.map((classroomRef) => classroomRef.get()));
    //                 const classrooms = classroomDocs.map((classroomDoc) => classroomDoc.data().classroom);

    //                 const updatedStudent = {
    //                     Name: student.Name,
    //                     level: levelData.level,
    //                     subjects: subjects,
    //                     classroomname: classrooms
    //                 };
    //                 return updatedStudent;
    //             })
    //         );

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const students = await Student.get();
    //         const studentArray = students.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             studentArray.map(async(student) => {
    //                 const levelRef = student.level;
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();

    //                 console.log('levelData:', levelData); // add this line

    //                 const subjectRefs = levelData.subject || [];
    //                 const subject2Refs = levelData.subject2 || [];
    //                 const subjectDocs = await Promise.all([...subjectRefs, ...subject2Refs].map((subjectRef) => subjectRef.get()));
    //                 const subjects = subjectDocs.map((subjectDoc) => {
    //                     const subjectData = subjectDoc.data();
    //                     return { name: subjectData.Name, matiere: subjectData.matiere };
    //                 });

    //                 console.log('subjects:', subjects); // add this line

    //                 // const classroomRefs = student.classroomname || [];
    //                 // const classroomDocs = await Promise.all(classroomRefs.map((classroomRef) => classroomRef.get()));
    //                 // const classrooms = classroomDocs.map((classroomDoc) => classroomDoc.data().classroom);
    //                 const classroomRefs = student.classroomname || [];
    //                 const classroomDocs = await Promise.all(classroomRefs.map((classroomRef) => classroomRef.get()));
    //                 const classrooms = classroomDocs.map((classroomDoc) => classroomDoc.data().classroom);

    //                 console.log('classrooms:', classrooms); // add this line

    //                 const updatedStudent = {
    //                     Name: student.Name,
    //                     level: levelData.level,
    //                     subjects: subjects,
    //                     classroomname: classrooms,
    //                 };
    //                 return updatedStudent;
    //             })
    //         );

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });





    router.get('/', async(req, res) => {
        try {
            const students = await Student.get();
            const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const result = await Promise.all(
                studentArray.map(async(student) => {
                    const levelRef = student.level;
                    const levelDoc = await levelRef.get();
                    const levelData = levelDoc.data();

                    const subjectRefs = levelData.subject || [];
                    const subject2Refs = levelData.subject2 || [];
                    const subjectDocs = await Promise.all([...subjectRefs, ...subject2Refs].map((subjectRef) => subjectRef.get()));
                    const subjects = subjectDocs.map((subjectDoc) => {
                        const subjectData = subjectDoc.data();
                        return { name: subjectData.Name, matiere: subjectData.matiere };
                    });

                    const classroomRefs = student.classroomname || [];
                    const classroomDocs = await Promise.all(classroomRefs.map((classroomRef) => classroomRef.get()));
                    const classrooms = classroomDocs.map((classroomDoc) => classroomDoc.data().classroomname);

                    const updatedStudent = {
                        Name: student.Name,
                        level: levelData.level,
                        subjects: subjects,
                        classroomname: classrooms
                    };
                    return updatedStudent;
                })
            );

            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    });



    // router.get('/:id', async(req, res) => {
    //     try {
    //         const doc = await Student.doc(req.params.id).get();
    //         if (!doc.exists) {
    //             res.status(404).send('Document not found');
    //         } else {
    //             const studentData = doc.data();
    //             const levelRef = studentData.level;
    //             const levelDoc = await levelRef.get(); // Use get() function on levelRef
    //             const levelData = levelDoc.data();
    //             res.send({ id: doc.id, ...studentData, level: { id: levelDoc.id, ...levelData } });
    //         }
    //     } catch (err) {
    //         res.status(500).send('Error ' + err);
    //     }
    // });

    // // const router = express.Router();
    // router.post('/', async(req, res) => {
    //     const { Name, level } = req.body;

    //     // Validate request body using the levelschema
    //     const { error } = levelschema.validate({ level });
    //     if (error) {
    //         return res.status(400).send(error.details[0].message);
    //     }

    //     // Create new student document with a reference to the level document
    //     const levelRef = db.doc(`Level/${level}`);
    //     const studentRef = await Student.add({ Name, level: levelRef });

    //     return res.status(201).send(`Student with ID: ${studentRef.id} added`);
    // });



    router.put('/:id', async(req, res) => {
        const id = req.params.id;
        const { Name, level } = req.body;

        // Validate request body using the levelschema
        const { error } = levelschema.validate({ level });
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Get the teacher document from Firestore using the provided ID
        const teacherRef = db.doc(`students/${id}`);
        const teacherDoc = await teacherRef.get();

        // If the teacher document doesn't exist, return a 404 error
        if (!teacherDoc.exists) {
            return res.status(404).send('Student not found');
        }

        // Update the teacher document with the new Name and level data
        const levelRef = db.doc(`Level/${level}`);
        await teacherRef.update({ Name, level: levelRef });

        return res.status(200).send(`Student with ID: ${id} updated`);
    });

    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await Student.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });

    return router;
};