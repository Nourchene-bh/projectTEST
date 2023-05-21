const express = require('express');
const router = express.Router();
const { createLevelRefs } = require('../models/teachers');
const { teachersschema } = require('../models/teachers');
const { levelschema } = require('../models/level');
// const { matiereschema } = require('../models/matiere');
const matiereschema = require('../models/matiere').matiereschema;
module.exports = (db) => { // Receive the db object as a parameter
    const Level = db.collection("Level");

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Level.get();
    //         const list = snapshot.docs.map(async(doc) => {
    //             const levelData = doc.data();
    //             const matiereRef = levelData.matiere;
    //             const matiereDoc = await matiereRef.get();
    //             const matiereData = matiereDoc.data();
    //             return { id: doc.id, level: levelData.level, matiere: matiereData };
    //         });
    //         res.send(await Promise.all(list));
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await Level.get();
    //         const list = snapshot.docs.map(async(doc) => {
    //             const levelData = doc.data();
    //             const matiereRef = levelData.matiere;
    //             const matiereDoc = await matiereRef.get();
    //             const matiereData = matiereDoc.data();
    //             return { id: doc.id, level: levelData.level, matiere: matiereData };
    //         });
    //         res.send(await Promise.all(list));
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const snapshot = await level.get();
    //         const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //         res.send(list);
    //     } catch (err) {
    //         res.send('Error ' + err);
    //     }
    // });

    // router.get('/', async(req, res) => {
    //             try {
    //                 const snapshot = await level.get();
    //                 const list = snapshot.docs.map(async(doc) => {
    //                     const levelData = doc.data();
    //                     const matiereRef = levelData.level;
    //                     const matiereDoc = await matiereRef.get();
    //                     const matiereData = matiereDoc.data();
    //                     return { id: doc.id, level: levelData.Name, matiere: matiereData };
    // });
    //                 res.send(await Promise.all(list));
    //             } catch (err) {
    //                 res.send('Error ' + err);
    //             };


    // router.get('/:id', async(req, res) => {
    //     try {
    //         const doc = await level.doc(req.params.id).get();
    //         if (!doc.exists) {
    //             res.status(404).send('Document not found');
    //         } else {
    //             res.send({ id: doc.id, ...doc.data() });
    //         }
    //     } catch (err) {
    //         res.status(500).send('Error ' + err);
    //     }
    // });


    // router.get('/', async(req, res) => {
    //     try {
    //         const levels = await Level.get();
    //         const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(levelArray.map(async(level) => {
    //             const subjectRefs = level.subject;
    //             const subjectDocs = await Promise.all(subjectRefs.map(ref => ref.get()));
    //             const subjects = subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));

    //             const updatedLevel = {...level, subject: subjects };
    //             return updatedLevel;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });



    // router.get('/', async(req, res) => {
    //     try {
    //         const levels = await Level.get();
    //         const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(levelArray.map(async(level) => {
    //             const subjectRefs = level.subject;
    //             const subjectDocs = await Promise.all(subjectRefs.map(ref => ref.get()));
    //             const subjects = subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));

    //             const updatedLevel = {...level, subject: subjects };
    //             return updatedLevel;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });


    // router.get('/:id', async(req, res) => {
    //     try {
    //         const levelId = req.params.id;
    //         const level = await Level.doc(levelId).get();

    //         if (!level.exists) {
    //             return res.status(404).json({ error: 'Level not found' });
    //         }

    //         const levelData = level.data();
    //         const subjectRefs = levelData.subject;
    //         const subjectDocs = await Promise.all(subjectRefs.map(ref => ref.get()));
    //         const subjects = subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));
    //         const updatedLevel = {...levelData, subject: subjects };


    //         res.status(200).json(updatedLevel);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/:id', async(req, res) => {
    //     try {
    //         const levelRef = Level.doc(req.params.id);
    //         const levelDoc = await levelRef.get();

    //         if (!levelDoc.exists) {
    //             return res.status(404).json({ error: 'Level not found' });
    //         }

    //         const levelData = levelDoc.data();
    //         const subjectRefs = levelData.subject;
    //         const subjectDocs = await Promise.all(subjectRefs.map(ref => ref.get()));
    //         const subjects = subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const updatedLevel = { id: levelDoc.id, ...levelData, subject: subjects };

    //         res.status(200).json(updatedLevel);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });


    // router.get('/:id', async(req, res) => {
    //     try {
    //         const levelId = req.params.id;
    //         const levelDoc = await Level.doc(levelId).get();
    //         if (!levelDoc.exists) {
    //             return res.status(404).json({ error: 'Level not found' });
    //         }

    //         const levelData = levelDoc.data();
    //         const teacherRef = levelData.subject[0];
    //         const teacherDoc = await teacherRef.get();
    //         const teacherId = teacherDoc.id;

    //         const matiereRef = levelData.subject[1];
    //         const matiereDoc = await matiereRef.get();
    //         const matiereName = matiereDoc.data().Name;

    //         const result = {
    //             level: levelData.level,
    //             id: levelDoc.id,
    //             teacherId: teacherId,
    //             matiereName: matiereName
    //         }

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    router.get('/:id', async(req, res) => {
        try {
            const levelRef = db.collection('Level').doc(req.params.id);
            const levelDoc = await levelRef.get();

            if (!levelDoc.exists) {
                return res.status(404).json({ error: 'Level not found' });
            }

            const levelData = levelDoc.data();

            const subjects = [];

            // Loop through the subject array and get the subject name and reference
            for (let i = 0; i < levelData.subject.length; i++) {
                const subjectRef = levelData.subject[i];
                const subjectDoc = await subjectRef.get();
                const subjectName = subjectDoc.data().Name;
                subjects.push({ id: subjectDoc.id, name: subjectName });
            }

            // Create the updated level object with the dynamic subject array
            const updatedLevel = {...levelData, subject: subjects };

            res.status(200).json(updatedLevel);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    });


    // router.get('/', async(req, res) => {
    //     try {
    //         const levels = await Level.get();
    //         const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(levelArray.map(async(level) => {
    //             const teacherRef = level.subject[0];
    //             const teacherDoc = await teacherRef.get();
    //             const teacherId = teacherDoc.id;
    //             const teacherName = teacherDoc.data().name;

    //             const matiereRef = level.subject[1];
    //             const matiereDoc = await matiereRef.get();
    //             const matiereName = matiereDoc.data().Name;

    //             const updatedLevel = {...level, subject: [{ id: teacherId, name: teacherName }, { name: matiereName }] };
    //             return updatedLevel;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });

    // router.get('/', async(req, res) => {
    //     try {
    //         const levels = await Level.get();
    //         const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    //         const result = await Promise.all(levelArray.map(async(level) => {
    //             const subjects = [];


    //             // Loop through the subject array and get the subject name and reference
    //             for (let i = 0; i < level.subject.length; i++) {
    //                 const subjectRef = level.subject[i];
    //                 const subjectDoc = await subjectRef.get();
    //                 const subjectName = subjectDoc.data().Name;
    //                 subjects.push({ name: subjectName });
    //             }


    //             // Create the updated level object with the dynamic subject array
    //             const updatedLevel = {...level, subject: subjects };
    //             return updatedLevel;
    //         }));

    //         res.status(200).json(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server Error' });
    //     }
    // });
    router.get('/', async(req, res) => {
        try {
            const levels = await Level.get();
            const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const result = await Promise.all(levelArray.map(async(level) => {
                const subjects = [];

                // Loop through the subject array and get the subject name and reference
                for (let i = 0; i < level.subject.length; i++) {
                    const subjectRef = level.subject[i];
                    const subjectDoc = await subjectRef.get();
                    const subjectName = subjectDoc.data().Name;
                    subjects.push({ name: subjectName });
                }

                // const subjects2 = [];
                // for (let i = 0; i < level.subject2.length; i++) {
                //     const subjectRef = level.subject2[i];
                //     const subjectDoc = await subjectRef.get();
                //     const subjectName = subjectDoc.data().Name;
                //     subjects2.push({ name: subjectName });
                // }

                // Create the updated level object with the dynamic subject arrays
                const updatedLevel = {...level, subject: subjects };
                return updatedLevel;
            }));

            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    });

    router.post('/', async(req, res) => {
        try {
            const docRef = await level.add(req.body);
            res.send({ id: docRef.id });
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.put('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await level.doc(id).update(data);
            res.send('User with ID ' + id + ' has been updated');
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await level.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });


    return router;
};