const express = require('express');
const router = express.Router();
const { LOGINSchema } = require('../models/users');

module.exports = (db) => { // Receive the db object as a parameter
    const User = db.collection("LOGIN");

    router.get('/', async(req, res) => {
        try {
            const snapshot = await User.get();
            const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            res.send(list);
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.get('/:id', async(req, res) => {
        try {
            const doc = await User.doc(req.params.id).get();
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
            const docRef = await User.add(req.body);
            res.send({ id: docRef.id });
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.put('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await User.doc(id).update(data);
            res.send('User with ID ' + id + ' has been updated');
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await User.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });


    return router;
};