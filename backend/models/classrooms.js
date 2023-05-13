const db = require('../db');
const Joi = require('@hapi/joi');
const classroomschema = Joi.object({
    classroomname: Joi.string().required()

});

const classroom = db.collection("classroom");

module.exports = {
    classroom,
    classroomschema
};