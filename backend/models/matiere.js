const db = require('../db');
const Joi = require('@hapi/joi');
const matiereschema = Joi.object({
    Name: Joi.string().required()
});
const matiere = db.collection('matiere');

module.exports = {
    matiere,
    matiereschema
};