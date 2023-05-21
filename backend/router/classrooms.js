const express = require('express');
const router = express.Router();
const { studentsSchema } = require('../models/classrooms');
module.exports = (db) => { // Receive the db object as a parameter
    const Class = db.collection("classroom");

    router.get('/', async(req, res) => {
        try {
            const snapshot = await Class.get();
            const list = snapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const classroomname = typeof data.classroomname === 'string' ? data.classroomname : '';
                return { id, classroomname };
            });
            res.send(list);
        } catch (err) {
            res.send('Error ' + err);
        }
    });

    router.get('/:id', async(req, res) => {
        try {
            const doc = await Class.doc(req.params.id).get();
            if (!doc.exists) {
                res.status(404).send('Document not found');
            } else {
                res.send({ id: doc.id, ...doc.data() });
            }
        } catch (err) {
            res.status(500).send('Error ' + err);
        }
    });


    router.post('/', async(req, res) => {
        try {
            const docRef = await Class.add(req.body);
            res.send({ id: docRef.id });
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.put('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await Class.doc(id).update(data);
            res.send('User with ID ' + id + ' has been updated');
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await Class.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });


    return router;
};