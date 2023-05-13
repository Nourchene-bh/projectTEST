// const express = require('express');
// const router = express.Router();
// const { studentsSchema } = require('../models/teachers');

// module.exports = (db) => { // Receive the db object as a parameter
//         const Teacher = db.collection("Teachers");

// router.get('/', async(req, res) => {
//     try {
//         const snapshot = await Teacher.get();
//         const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         res.send(list);
//     } catch (err) {
//         res.send('Error ' + err);
//     }
// });
// router.get('/:id', async(req, res) => {
//     try {
//         const doc = await Teacher.doc(req.params.id).get();
//         if (!doc.exists) {
//             res.status(404).send('Document not found');
//         } else {
//             res.send({ id: doc.id, ...doc.data() });
//         }
//     } catch (err) {
//         res.status(500).send('Error ' + err);
//     }
// });

const express = require('express');
const router = express.Router();
const { eachersschema } = require('../models/teachers');
const levelschema = require('../models/level').levelschema;
const classroomschema = require('../models/classrooms').classroomschema;
// const matiereschema = require('../models/classrooms').matiereschema;
module.exports = (db) => { // Receive the db object as a parameter
    const Teacher = db.collection("Teachers");

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Teacher.get();
    //         const list = snapshot.docs.map(async(doc) => {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             const classroomRef = teacherData.classroomname;
    //             const levelDoc = await levelRef.get();
    //             const classroomDoc = await classroomRef.get();
    //             const levelData = levelDoc.data();
    //             const classroomData = classroomDoc.data();
    //             return { id: doc.id, Name: teacherData.Name, level: levelData, classroomname: classroomData };
    //         });
    //         res.send(await Promise.all(list));
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Teacher.get();
    //         const list = snapshot.docs.map(async(doc) => {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             const classroomRef = teacherData.classroomname;
    //             // const matiereRef = teacherData.matiere;
    //             let levelData, classroomData;
    //             if (levelRef) {
    //                 const levelDoc = await levelRef.get();
    //                 levelData = levelDoc.data();
    //             }
    //             if (classroomRef) {
    //                 const classroomDoc = await classroomRef.get();
    //                 classroomData = classroomDoc.data();
    //             }
    //             // if (matiereRef) {
    //             //     const matiereDoc = await matiereRef.get();
    //             //     matiereData = matiereDoc.data();
    //             // }

    //             return { id: doc.id, Name: teacherData.Name, level: levelData.level, classroomname: classroomData };
    //         });
    //         res.send(await Promise.all(list));
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });


    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Teacher.get();
    //         const list = await Promise.all(snapshot.docs.map(async(doc) => {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             const classroomRef = teacherData.classroomname;
    //             let levelData = null,
    //                 classroomData = null;
    //             if (levelRef) {
    //                 const levelDoc = await levelRef.get();
    //                 if (levelDoc.exists) {
    //                     levelData = levelDoc.data();
    //                 }
    //             }
    //             if (classroomRef) {
    //                 const classroomDoc = await classroomRef.get();
    //                 if (classroomDoc.exists) {
    //                     classroomData = classroomDoc.data();
    //                 }
    //             }
    //             const teacher = {
    //                 id: doc.id,
    //                 Name: teacherData.Name,
    //                 level: levelData ? {
    //                     id: levelData.id,
    //                     Name: levelData.Name,
    //                     matiere: levelData.matiere ? {
    //                         id: levelData.matiere.id,
    //                         Name: levelData.matiere.Name
    //                     } : null
    //                 } : null,
    //                 classroomname: classroomData ? {
    //                     id: classroomData.id,
    //                     Name: classroomData.Name
    //                 } : null
    //             };
    //             return teacher;
    //         }));
    //         res.send(list);
    //     } catch (err) {
    //         res.status(500).send({ error: err.message });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Teacher.get();
    //         const list = await Promise.all(snapshot.docs.map(async(doc) => {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             // const classroomRef = teacherData.classroomname;
    //             let levelData = null
    //                 // classroomData = null;
    //             if (levelRef) {
    //                 const levelDoc = await levelRef.get();
    //                 levelData = levelDoc.data();
    //                 // if (levelData && levelData.matiere) {
    //                 //     const matiereDoc = await levelData.matiere.get();
    //                 //     const matiereData = matiereDoc.data();
    //                 //     levelData.matiere = { id: matiereData.id, Name: matiereData.Name };
    //                 // }


    //             }
    //             // if (classroomRef) {
    //             //     const classroomDoc = await classroomRef.get();
    //             //     classroomData = classroomDoc.data();
    //             // }
    //             return {
    //                 id: doc.id,
    //                 Name: teacherData.Name,
    //                 level: levelData ? { id: levelData.id, level: levelData.level } : null,
    //                 // classroomname: classroomData ? { id: classroomData.id, calssroomname: classroomData.classroomname } : null
    //             };
    //         }));
    //         res.send(list);
    //     } catch (err) {
    //         res.status(500).send({ error: err.message });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Teacher.get();
    //         const list = await Promise.all(snapshot.docs.map(async(doc) => {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             let levelData = null;
    //             if (levelRef) {
    //                 const levelDoc = await levelRef.get();
    //                 levelData = levelDoc.data();
    //                 if (levelData && levelData.subject) {
    //                     const teacherId = levelData.subject[0].id;
    //                     const matiereRef = levelData.subject[1];
    //                     const matiereDoc = await matiereRef.get();
    //                     const matiereName = matiereDoc.data().Name;
    //                     levelData.subject = [{ name: matiereName }];
    //                 }
    //             }
    //             return {
    //                 id: doc.id,
    //                 Name: teacherData.Name,
    //                 level: levelData ? { id: levelData.id, level: levelData.level, subject: levelData.subject } : null,
    //             };
    //         }));
    //         res.send(list);
    //     } catch (err) {
    //         res.status(500).send({ error: err.message });
    //     }
    // });


    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjectRefs = levelData.subject;
    //                 const subjects = [];

    //                 // Loop through the subject array and get the subject name and reference
    //                 for (let j = 0; j < subjectRefs.length; j++) {
    //                     const subjectRef = subjectRefs[j];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     subjects.push({ id: subjectDoc.id, name: subjectName });
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through both subject arrays and get the subject name and reference
    //                 for (let j = 0; j < levelData.subject.length; j++) {
    //                     const subjectRef = levelData.subject[j];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;

    //                     subjects.push({ name: subjectName });
    //                 }

    //                 if (levelData.subject2) {
    //                     for (let k = 0; k < levelData.subject2.length; k++) {
    //                         const subjectRef = levelData.subject2[k];
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectName = subjectDoc.data().Name;
    //                         subjects.push({ name: subjectName });
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the first subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0 && levelData.subject[0].id === teacher.id) {
    //                     const subjectRef = levelData.subject[0];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     subjects.push({ name: subjectName });
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the first subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0 && levelData.subject[0].id === teacher.id) {
    //                     const subjectRef = levelData.subject[0];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     const matiere = subjectDoc.data().matiere;
    //                     subjects.push({ name: subjectName, matiere: matiere });
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const matiere = subjectDoc.data().matiere;
    //                             subjects.push({ name: subjectName, matiere: matiere });
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the first subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0 && levelData.subject[0].id === teacher.id) {
    //                     const subjectRef = levelData.subject[0];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     const subjectMatiere = subjectDoc.data().matiere;
    //                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the first subject array and get the subject name, reference, and matiere if teacher's ID matches
    //                 if (levelData.subject.length > 0 && levelData.subject[0].id === teacher.id) {
    //                     const subjectRef = levelData.subject[0];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     const subjectMatiere = subjectDoc.data().matiere;
    //                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                 }


    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array and subject array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels, subject: teacher.subject };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the first subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0 && levelData.subject[0].id === teacher.id) {
    //                     const subjectRef = levelData.subject[0];
    //                     const subjectDoc = await subjectRef.get();
    //                     const subjectName = subjectDoc.data().Name;
    //                     const subjectMatiere = subjectDoc.data().matiere;
    //                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0) {
    //                     for (let j = 0; j < levelData.subject.length; j++) {
    //                         const subjectRef = levelData.subject[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectName = subjectDoc.data().Name;
    //                         const subjectMatiere = subjectDoc.data().matiere;
    //                         if (subjectMatiere) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         } else {
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             if (subjectMatiere) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the subject array and get the subject name and reference if teacher's ID matches the first id of the subject array
    //                 if (levelData.subject.length > 0) {
    //                     const firstSubjectRef = levelData.subject[0];
    //                     const firstSubjectDoc = await firstSubjectRef.get();
    //                     const firstSubjectData = firstSubjectDoc.data();
    //                     const firstSubjectTeacherId = firstSubjectData.id;
    //                     if (firstSubjectTeacherId === teacher.id) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             if (subjectMatiere) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             if (subjectMatiere) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async teacher => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             // Loop through the level array and get the level and subject information
    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 // Loop through the subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject.length > 0) {
    //                     for (let j = 0; j < levelData.subject.length; j++) {
    //                         const subjectRef = levelData.subject[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectName = subjectDoc.data().Name;
    //                         const subjectMatiere = subjectDoc.data().matiere;
    //                         if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         } else if (subjectMatiere) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere.slice(1) });
    //                         } else {
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }
    //                 }

    //                 // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                 if (levelData.subject2) {
    //                     for (let j = 0; j < levelData.subject2.length; j++) {
    //                         const subjectRef = levelData.subject2[j];
    //                         const subjectDoc = await subjectRef.get();
    //                         if (subjectDoc.data().id === teacher.id) {
    //                             const subjectName = subjectDoc.data().Name;
    //                             const subjectMatiere = subjectDoc.data().matiere;
    //                             if (subjectMatiere) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere.slice(1) });
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }
    //                 }

    //                 // Create the updated level object with the dynamic subject array
    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             // Create the updated teacher object with the dynamic level array
    //             const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });




    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 // Loop through the level array and get the level and subject information
    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();
    //                     const subjects = [];

    //                     // Loop through the subject array and get the subject name and reference if teacher's ID matches
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;
    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);
    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     // Loop through the second subject array and get the subject name and reference if teacher's ID matches
    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;
    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);
    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     // Create the updated level object with the dynamic subject array
    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 // Create the updated teacher object with the dynamic level array
    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 const { level, ...teacherData } = teacher; // exclude level key from teacher data
    //                 const updatedTeacher = {...teacherData, level: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
    //             })
    //         );

    //         res.status(200).json(JSON.parse(JSON.stringify(result)));
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async(teacher) => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 if (levelData.subject && levelData.subject.length > 0) {
    //                     await Promise.all(levelData.subject.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         const subjectName = subjectData.Name;
    //                         const subjectMatiere = subjectData.matiere;

    //                         if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         } else if (subjectMatiere) {
    //                             const otherTeachers = subjectMatiere.slice(1);
    //                             if (otherTeachers.includes(teacher.id)) {
    //                                 subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                             }
    //                         } else {
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }));
    //                 }

    //                 if (levelData.subject2) {
    //                     await Promise.all(levelData.subject2.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         if (subjectData.id === teacher.id) {
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;
    //                             if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);
    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }));
    //                 }

    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             const updatedTeacher = { id: teacher.id, name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({ error: 'An error occurred while fetching data' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async(teacher) => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 if (levelData.subject && levelData.subject.length > 0) {
    //                     await Promise.all(levelData.subject.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         const subjectName = subjectData.Name;
    //                         const subjectMatiere = subjectData.matiere;

    //                         if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         } else if (subjectMatiere) {
    //                             const otherTeachers = subjectMatiere.slice(1);
    //                             if (otherTeachers.includes(teacher.id)) {
    //                                 subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                             }
    //                         } else {
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }));
    //                 }

    //                 if (levelData.subject2) {
    //                     await Promise.all(levelData.subject2.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         if (subjectData.id === teacher.id) {
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;
    //                             if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);
    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }));
    //                 }

    //                 const filteredSubjects = subjects.filter(subject => {
    //                     if (subject.matiere && subject.matiere.includes(teacher.id)) {
    //                         return true;
    //                     }
    //                     return false;
    //                 });

    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: filteredSubjects };
    //                 levels.push(updatedLevel);
    //             }

    //             const updatedTeacher = { id: teacher.id, name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({ error: 'An error occurred while fetching data' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(teacherArray.map(async(teacher) => {
    //             const levelRefs = teacher.level;
    //             const levels = [];

    //             for (let i = 0; i < levelRefs.length; i++) {
    //                 const levelRef = levelRefs[i];
    //                 const levelDoc = await levelRef.get();
    //                 const levelData = levelDoc.data();
    //                 const subjects = [];

    //                 if (levelData.subject && levelData.subject.length > 0) {
    //                     await Promise.all(levelData.subject.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         const subjectName = subjectData.Name;
    //                         const subjectMatiere = subjectData.matiere;

    //                         if (subjectMatiere && subjectMatiere.includes(teacher.id)) {
    //                             subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                         } else if (subjectMatiere) {
    //                             const otherTeachers = subjectMatiere.filter((teacherId) => teacherId !== teacher.id);
    //                             if (otherTeachers.length > 0) {
    //                                 subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                             } else {
    //                                 subjects.push({ name: subjectName, matiere: [teacher.id] });
    //                             }
    //                         } else {
    //                             subjects.push({ name: subjectName });
    //                         }
    //                     }));
    //                 }

    //                 if (levelData.subject2) {
    //                     await Promise.all(levelData.subject2.map(async(subjectRef) => {
    //                         const subjectDoc = await subjectRef.get();
    //                         const subjectData = subjectDoc.data();
    //                         if (subjectData.id === teacher.id) {
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;
    //                             if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.filter((teacherId) => teacherId !== teacher.id);
    //                                 if (otherTeachers.length > 0) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id] });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }));
    //                 }

    //                 const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                 levels.push(updatedLevel);
    //             }

    //             const updatedTeacher = { id: teacher.id, name: teacher.Name, level: levels };
    //             return updatedTeacher;
    //         }));

    //         res.status(200).json(result);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({ error: 'An error occurred while fetching data' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                     levels.push(updatedLevel);
    //                 }

    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
    //             })
    //         );

    //         res.status(200).json(JSON.parse(JSON.stringify(result)));
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { id: teacher.id, Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
    //             })
    //         );

    //         res.status(200).json(JSON.parse(JSON.stringify(result)));
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id)) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                 } else {
    //                                     subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                 }
    //                             } else {
    //                                 subjects.push({ name: subjectName });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers] });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere });
    //                                     }
    //                                 } else {
    //                                     subjects.push({ name: subjectName });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
    //             })
    //         );

    //         res.status(200).json(JSON.parse(JSON.stringify(result)));
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();
    //                             const subjectName = subjectData.Name;
    //                             const subjectMatiere = subjectData.matiere;

    //                             if (subjectMatiere && subjectMatiere[0] === teacher.id && teacher.Name === subjectData.teacherName) {
    //                                 subjects.push({ name: subjectName, matiere: subjectMatiere, level: levelData.level });
    //                             } else if (subjectMatiere) {
    //                                 const otherTeachers = subjectMatiere.slice(1);

    //                                 if (otherTeachers.includes(teacher.id) && teacher.Name === subjectData.teacherName) {
    //                                     subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers], level: levelData.level });
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id && teacher.Name === subjectData.teacherName) {
    //                                 const subjectName = subjectData.Name;
    //                                 const subjectMatiere = subjectData.matiere;

    //                                 if (subjectMatiere) {
    //                                     const otherTeachers = subjectMatiere.slice(1);

    //                                     if (otherTeachers.includes(teacher.id)) {
    //                                         subjects.push({ name: subjectName, matiere: [teacher.id, ...otherTeachers], level: levelData.level });
    //                                     } else {
    //                                         subjects.push({ name: subjectName, matiere: subjectMatiere, level: levelData.level });
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subject: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { Name: teacher.Name, level: levels };
    //                 return updatedTeacher;
    //             })
    //         );

    //         res.status(200).json(JSON.parse(JSON.stringify(result)));
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.matiere && subjectData.matiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subjects: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { Name: teacher.Name, levels: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.matiere && subjectData.matiere[0] === teacher.id && subjectData.id === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.matiere && subjectData.matiere[0] === teacher.id && subjectData.id === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subjects: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { Name: teacher.Name, levels: levels };
    //                 return updatedTeacher;
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
    //         const teachers = await Teacher.get();
    //         const teacherArray = teachers.docs.map((doc) => ({...doc.data() }));

    //         const result = await Promise.all(
    //             teacherArray.map(async(teacher) => {
    //                 const levelRefs = teacher.level;
    //                 const levels = [];

    //                 for (let i = 0; i < levelRefs.length; i++) {
    //                     const levelRef = levelRefs[i];
    //                     const levelDoc = await levelRef.get();
    //                     const levelData = levelDoc.data();

    //                     const subjects = [];
    //                     if (levelData.subject && levelData.subject.length > 0) {
    //                         for (let j = 0; j < levelData.subject.length; j++) {
    //                             const subjectRef = levelData.subject[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.matiere && subjectData.matiere[0] === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     if (levelData.subject2) {
    //                         for (let j = 0; j < levelData.subject2.length; j++) {
    //                             const subjectRef = levelData.subject2[j];
    //                             const subjectDoc = await subjectRef.get();
    //                             const subjectData = subjectDoc.data();

    //                             if (subjectData.id === teacher.id) {
    //                                 subjects.push({ name: subjectData.Name, matiere: subjectData.matiere });
    //                             }
    //                         }
    //                     }

    //                     // Only add levels with subjects to the results
    //                     if (subjects.length > 0 && teacher.id === levelData.teacher) {
    //                         const updatedLevel = { id: levelDoc.id, level: levelData.level, subjects: subjects };
    //                         levels.push(updatedLevel);
    //                     }
    //                 }

    //                 const updatedTeacher = { Name: teacher.Name, levels: levels };
    //                 return updatedTeacher;
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

    //                 const classrooms = [];
    //                 if (student.classroomname && student.classroomname.length > 0) {
    //                     for (let i = 0; i < student.classroomname.length; i++) {
    //                         const classroomRef = student.classroomname[i];
    //                         const classroomDoc = await classroomRef.get();
    //                         const classroomData = classroomDoc.data();

    //                         const teachers = [];
    //                         if (classroomData.teacher && classroomData.teacher.length > 0) {
    //                             for (let j = 0; j < classroomData.teacher.length; j++) {
    //                                 const teacherRef = classroomData.teacher[j];
    //                                 const teacherDoc = await teacherRef.get();
    //                                 const teacherData = teacherDoc.data();

    //                                 if (teacherData.id === student.id) {
    //                                     teachers.push({ name: teacherData.Name, id: teacherData.id });
    //                                 }
    //                             }
    //                         }

    //                         if (classroomData.teacher2) {
    //                             for (let j = 0; j < classroomData.teacher2.length; j++) {
    //                                 const teacherRef = classroomData.teacher2[j];
    //                                 const teacherDoc = await teacherRef.get();
    //                                 const teacherData = teacherDoc.data();

    //                                 if (teacherData.id === student.id) {
    //                                     teachers.push({ name: teacherData.Name, id: teacherData.id });
    //                                 }
    //                             }
    //                         }

    //                         if (teachers.length > 0) {
    //                             const updatedClassroom = { name: classroomData.name, teachers: teachers };
    //                             classrooms.push(updatedClassroom);
    //                         }
    //                     }
    //                 }

    //                 const updatedStudent = { Name: student.Name, level: levelData.level, classrooms: classrooms };
    //                 return updatedStudent;
    //             })
    //         );

    //         const filteredResult = result.filter((student) => student.classrooms.length > 0);

    //         res.status(200).json(filteredResult);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachers = await db.collection('Teachers').get();
    //         const teacherArray = teachers.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));
    //         res.json(teacherArray);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).send('Server Error');
    //     }
    // });
    // router.get('/', async(req, res) => {
    //     const snapshot = await db.collection('Teachers').get();
    //     const teachers = snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         level: doc.data().level,
    //         Name: doc.data().Name,
    //         matiere: doc.data().matiere.map(m => m.id) // select only the id field from each matiere object
    //     }));
    //     res.json(teachers);
    // });
    // router.get('/', async(req, res) => {
    //     try {
    //         const teachersSnapshot = await db.collection('Teachers').get();
    //         const teachers = [];
    //         const matierePromises = [];

    //         teachersSnapshot.forEach((teacherDoc) => {
    //             const teacher = teacherDoc.data();
    //             const matiereRefs = teacher.matiere.map((m) => db.collection('matiere').doc(m.ref).get());
    //             matierePromises.push(...matiereRefs);
    //             teachers.push({ id: teacherDoc.id, ...teacher });
    //         });

    //         const matiereDocs = await Promise.all(matierePromises);
    //         const matieres = matiereDocs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         teachers.forEach((teacher) => {
    //             teacher.matiere = teacher.matiere.map((m) => matieres.find((mat) => mat.id === m.ref));
    //         });

    //         res.json(teachers);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send('Error getting teachers');
    //     }
    // });


    // router.get('/', async(req, res) => {
    //     try {
    //         const teachersSnapshot = await db.collection('Teachers').get();
    //         const teachers = [];
    //         const matierePromises = [];

    //         teachersSnapshot.forEach((teacherDoc) => {
    //             const teacher = teacherDoc.data();
    //             const teacherId = teacherDoc.id;
    //             const matierePromises = teacher.matiere.map((m) => db.collection('matiere').doc(m.ref).get());
    //             matierePromises.forEach(async(promise) => {
    //                 const doc = await promise;
    //                 const matiere = doc.data();
    //                 if (teacher.matiere.some((m) => m.ref === doc.id)) {
    //                     teacher.matiere[teacher.matiere.findIndex((m) => m.ref === doc.id)].matiere = matiere;
    //                 }
    //             });
    //             teachers.push({ id: teacherId, ...teacher });
    //         });


    //         const matiereDocs = await Promise.all(matierePromises);
    //         const matieres = matiereDocs.map((doc) => ({ id: doc.id, ...doc.data() }));

    //         teachers.forEach((teacher) => {
    //             teacher.matiere = teacher.matiere.map((m) => matieres.find((mat) => mat.id === m.ref));
    //         });

    //         res.json(teachers);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send('Error getting teachers');
    //     }
    // });
    router.get('/', async(req, res) => {
        try {
            const teachersSnapshot = await db.collection('Teachers').get();
            const teachers = [];

            // Loop through teachers
            teachersSnapshot.forEach((teacherDoc) => {
                const teacher = teacherDoc.data();
                const teacherId = teacherDoc.id;
                const matiereRefs = teacher.matiere;

                // Create an array of promises to fetch matiere documents
                const matierePromises = matiereRefs.map((ref) => db.collection('matiere').doc(ref.id).get());

                // Wait for all promises to resolve and extract data
                Promise.all(matierePromises).then((matiereDocs) => {
                    const matieres = matiereDocs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    teacher.matiere = matieres;
                    teachers.push({ id: teacherId, ...teacher });

                    // Send response once all teachers have been processed
                    if (teachersSnapshot.size === teachers.length) {
                        res.json(teachers);
                    }
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting teachers');
        }
    });


    // router.get('/:id', async(req, res) => {
    //     try {
    //         const doc = await Teacher.doc(req.params.id).get();
    //         if (!doc.exists) {
    //             res.status(404).send('Teacher not found');
    //         } else {
    //             const teacherData = doc.data();
    //             const levelRef = teacherData.level;
    //             const classroomRef = teacherData.classroomname;
    //             let levelData = null,
    //                 classroomData = null;
    //             if (levelRef) {
    //                 const levelDoc = await levelRef.get();
    //                 levelData = levelDoc.data();
    //                 if (levelData && levelData.matiere) {
    //                     const matiereDoc = await levelData.matiere.get();
    //                     const matiereData = matiereDoc.data();
    //                     levelData.matiere = { id: matiereData.id, Name: matiereData.Name };
    //                 }
    //             }
    //             if (classroomRef) {
    //                 const classroomDoc = await classroomRef.get();
    //                 classroomData = classroomDoc.data();
    //             }
    //             res.send({
    //                 id: doc.id,
    //                 Name: teacherData.Name,
    //                 level: levelData ? { id: levelData.id, level: levelData.level, matiere: levelData.matiere } : null,
    //                 classroomname: classroomData ? { id: classroomData.id, calssroomname: classroomData.classroomname } : null
    //             });
    //         }
    //     } catch (err) {
    //         res.status(500).send({ error: err.message });
    //     }
    // });
    router.get('/:id', async(req, res) => {
        try {
            const teacherId = req.params.id;
            const teacherDoc = await Teacher.doc(teacherId).get();
            const teacherData = teacherDoc.data();
            const levelRef = teacherData.level;
            let levelData = null;
            if (levelRef) {
                const levelDoc = await levelRef.get();
                levelData = levelDoc.data();
                if (levelData && levelData.subject) {
                    const matiereRef = levelData.subject[1];
                    const matiereDoc = await matiereRef.get();
                    const matiereName = matiereDoc.data().Name;
                    levelData.subject = [{ name: matiereName }];
                }
            }
            res.send({
                id: teacherDoc.id,
                Name: teacherData.Name,
                level: levelData ? { id: levelData.id, level: levelData.level, subject: levelData.subject } : null,
            });
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    });

    router.post('/', async(req, res) => {
        try {
            const { Name, level, classroomname } = req.body;

            // create a new Teacher document with the given data
            const teacherRef = await Teacher.add({
                Name,
                level: level ? db.doc(`/Level/${level}`) : null,
                classroomname: classroomname ? db.doc(`/classroom/${classroomname}`) : null,
            });

            // get the newly created Teacher document and its related data
            const teacherDoc = await teacherRef.get();
            const teacherData = teacherDoc.data();
            const levelRef = teacherData.level;
            const classroomRef = teacherData.classroomname;
            let levelData = null,
                classroomData = null;
            if (levelRef) {
                const levelDoc = await levelRef.get();
                levelData = levelDoc.data();
                if (levelData && levelData.matiere) {
                    const matiereDoc = await levelData.matiere.get();
                    const matiereData = matiereDoc.data();
                    levelData.matiere = { id: matiereData.id, Name: matiereData.Name };
                }
            }
            if (classroomRef) {
                const classroomDoc = await classroomRef.get();
                classroomData = classroomDoc.data();
            }

            // return the newly created Teacher document with its related data
            const responseData = {
                id: teacherDoc.id,
                Name: teacherData.Name,
                level: levelData ? { id: levelData.id, level: levelData.level, matiere: levelData.matiere } : null,
            };
            if (classroomData) {
                responseData.classroomname = { id: classroomData.id, classroomname: classroomData.classroomname };
            }
            res.send(responseData);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    });


    // const router = express.Router();
    // router.post('/', async(req, res) => {
    //     const { Name, level, classroomname, } = req.body;

    //     // Validate request body using the levelschema
    //     const { error } = levelschema.validate({ level });
    //     if (error) {
    //         return res.status(400).send(error.details[0].message);
    //     }

    //     // Create new student document with a reference to the level document
    //     const levelRef = db.doc(`Level/${level}`);
    //     const classroomRef = db.doc(`classroom/${classroomname}`);
    //     // const matiereRef = db.doc(`matiere/${matiere}`);
    //     const teacherRef = await Teacher.add({ Name, level: levelRef, classroomname: classroomRef });

    //     return res.status(201).send(`Teacher with ID: ${teacherRef.id} added`);
    // });



    // router.post('/', async(req, res) => {
    //     try {
    //         const { Name, level, classroomname } = req.body;

    //         // create a new Teacher document with the given data
    //         const teacherRef = await Teacher.add({
    //             Name,
    //             level: level ? db.doc(`/Level/${level}`) : null,
    //             classroomname: classroomname ? db.doc(`/classrooms/${classroomname}`) : null,
    //         });

    //         // get the newly created Teacher document and its related data
    //         const teacherDoc = await teacherRef.get();
    //         const teacherData = teacherDoc.data();
    //         const levelRef = teacherData.level;
    //         const classroomRef = teacherData.classroomname;
    //         let levelData = null,
    //             classroomData = null;
    //         if (levelRef) {
    //             const levelDoc = await levelRef.get();
    //             levelData = levelDoc.data();
    //             if (levelData && levelData.matiere) {
    //                 const matiereDoc = await levelData.matiere.get();
    //                 const matiereData = matiereDoc.data();
    //                 levelData.matiere = { id: matiereData.id, Name: matiereData.Name };
    //             }
    //         }
    //         if (classroomRef) {
    //             const classroomDoc = await classroomRef.get();
    //             classroomData = classroomDoc.data();
    //         }

    //         // return the newly created Teacher document with its related data
    //         res.send({
    //             id: teacherDoc.id,
    //             Name: teacherData.Name,
    //             level: levelData ? { id: levelData.id, level: levelData.level, matiere: levelData.matiere } : null,
    //             classroomname: classroomData ? { id: classroomData.id, classroomname: classroomData.classroomname } : null,

    //         });
    //     } catch (err) {
    //         res.status(500).send({ error: err.message });
    //     }
    // });


    // router.put('/:id', async(req, res) => {
    //     try {
    //         const id = req.params.id;
    //         const data = req.body;
    //         await Teacher.doc(id).update(data);
    //         res.send('User with ID ' + id + ' has been updated');
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });
    // router.put('/:id', async(req, res) => {
    //     const id = req.params.id;
    //     const { Name, level } = req.body;
    //     // Validate request body using the levelschema
    //     const { error } = levelschema.validate({ level });
    //     // const { er } = matiereschema.validate({ matiere });
    //     // const { clas } = classroomschema.validate({ matiere });
    //     if (error) {
    //         return res.status(400).send(error.details[0].message);
    //     }

    //     // Get the teacher document from Firestore using the provided ID
    //     const teacherRef = db.doc(`Teachers/${id}`);
    //     const teacherDoc = await teacherRef.get();

    //     // If the teacher document doesn't exist, return a 404 error
    //     if (!teacherDoc.exists) {
    //         return res.status(404).send('Teacher not found');
    //     }

    //     // Update the teacher document with the new Name and level data
    //     const levelRef = db.doc(`Level/${level}`);
    //     // const matiereRef = db.doc(`matiere/${matiere}`);
    //     const classroomRef = db.doc(`classroom/${classroomname}`);
    //     await teacherRef.update({ Name, level: levelRef, classroomname: classroomRef });
    //     return res.status(200).send(`Teacher with ID: ${id} updated`);
    // });



    router.put('/:id', async(req, res) => {
        try {
            const { id } = req.params;
            // const { Name, level, classroomname } = req.body;
            const { Name, level, classroomname } = req.body;

            // get the teacher document to update
            const teacherRef = db.collection('Teachers').doc(id);
            const teacherDoc = await teacherRef.get();

            // update the teacher document with the new data
            await teacherRef.update({
                Name: Name || teacherDoc.data().Name,
                level: level ? db.doc(`/Level/${level}`) : teacherDoc.data().level,
                // classroomname: classroomname ? db.doc(`/classroom/${classroomname}`) : teacherDoc.data().classroomname,
            });

            // get the updated teacher document and its related data
            const updatedTeacherDoc = await teacherRef.get();
            const updatedTeacherData = updatedTeacherDoc.data();
            const updatedLevelRef = updatedTeacherData.level;
            // const updatedClassroomRef = updatedTeacherData.classroomname;
            let updatedLevelData = null
                // updatedClassroomData = null;
            if (updatedLevelRef) {
                const updatedLevelDoc = await updatedLevelRef.get();
                updatedLevelData = updatedLevelDoc.data();
                // if (updatedLevelData && updatedLevelData.matiere) {
                // const updatedMatiereDoc = await updatedLevelData.matiere.get();
                // const updatedMatiereData = updatedMatiereDoc.data();
                // updatedLevelData.matiere = { id: updatedMatiereData.id, Name: updatedMatiereData.Name };
                // }
            }
            // if (updatedClassroomRef) {
            //     const updatedClassroomDoc = await updatedClassroomRef.get();
            //     updatedClassroomData = updatedClassroomDoc.data();
            // }

            // return the updated teacher document with its related data
            res.send({
                id: updatedTeacherDoc.id,
                Name: updatedTeacherData.Name,
                // level: updatedLevelData ? { id: updatedLevelData.id, level: updatedLevelData.level, matiere: updatedLevelData.matiere } : null,
                level: updatedLevelData ? { id: updatedLevelData.id, level: updatedLevelData.level } : null,
                // classroomname: updatedClassroomData ? { id: updatedClassroomData.id, classroomname: updatedClassroomData.classroomname } : null,
            });
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    });

    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await Teacher.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });


    return router;
};