const db = require('../db');

const LOGINSchema = {
    Name: {
        type: 'string',
        required: true
    },
    Password: {
        type: 'string',
        required: true
    },
    Role: {
        type: 'string',
        required: true
    }
};

const User = db.collection("LOGIN");

module.exports = {
    User,
    LOGINSchema
};