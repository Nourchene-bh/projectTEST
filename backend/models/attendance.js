const db = require('../db');
const Joi = require('@hapi/joi');
const createattendanceRefs = async() => {
    const attendances = await db.collection('attendance').get();
    const batch = db.batch();

    const attendanceArray = attendances.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    for (let i = 0; i < attendanceArray.length; i++) {
        const attendance = attendanceArray[i];

        const matiereRef = [db.collection('matiere').doc(attendance.subject[1].split('/')[2]),
            db.collection('matiere').doc(attendance.subject2[1].split('/')[2])
        ];

        batch.update(db.collection('attendance').doc(attendance.id), {
            matiere: matiereRef,
            teachers: teachersRef,
        });
    }

    await batch.commit();
};

const matiereSchema = Joi.string().custom(async(value, helpers) => {
    const docRef = db.collection('matiere').doc(value);
    const doc = await docRef.get();
    if (!doc.exists) {
        return helpers.error('any.invalid');
    }
    return value;
});
const attendanceSchema = Joi.object({
    Name: Joi.string().required(),
    last: Joi.string().required(),
    level: Joi.string().required(),
    is_present: Joi.boolean().required(),
    cin: Joi.boolean().required(),
    subject: Joi.array()
        .items(
            Joi.string().valid(/^matiere\/\w+$/)
        )
        .length(2)
        .required(),
});

const attendance = db.collection('attendance');
const matiere = db.collection('matiere');

module.exports = {
    attendance,
    attendanceSchema,
    createattendanceRefs,
    matiere,
    matiereSchema
};