const express = require('express');
const router = express.Router();
const { createLevelRefs } = require('../models/students');
const { studentschema } = require('../models/students');
const { matiereschema } = require('../models/matiere');

module.exports = (db) => { // Receive the db object as a parameter
    const matiere = db.collection("matiere");


    router.get('/', async(req, res) => {
        try {
            const snapshot = await matiere.get();
            const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            res.send(list);
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.get('/:id', async(req, res) => {
        try {
            const doc = await level.doc(req.params.id).get();
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
            const docRef = await matiere.add(req.body);
            res.send({ id: docRef.id });
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.put('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await matiere.doc(id).update(data);
            res.send('User with ID ' + id + ' has been updated');
        } catch (err) {
            res.send('Error ' + err);
        }
    });
    router.delete('/:id', async(req, res) => {
        try {
            const id = req.params.id;
            await matiere.doc(id).delete();
            res.send('User with ID ' + id + ' has been deleted');
        } catch (err) {
            res.send('Error ' + err);
        }
    });


    return router;
};