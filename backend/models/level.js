// const db = require('../db');

// // const levelschema = {
// //     level: {
// //         type: 'string',
// //         required: true
// //     }
// // };


// const Joi = require('@hapi/joi');
// const levelschema = Joi.object({
//     level: Joi.string().required(),
//     matiere: Joi.string().valid(
//         ...(await db.collection('Matiere').distinct('matiere'))
//     ).required(),
// });


// const Level = db.collection('Level');
// const matiere = db.collection('matiere');


// const createLevelRefs = async() => {
//     const matieres = await matiere.get();
//     const batch = db.batch();
//     const matiereArray = matieres.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     matiereArray.forEach((matiere) => {
//         const matiereId = matiere.matiere;
//         const matierelRef = matiere.doc(matiereId);
//         batch.update(matiere.doc(matiere.id), { matiere: matierelRef });
//     });
//     await batch.commit();
// };

// module.exports = {
//     Level,
//     levelschema,
//     matiere,
//     createLevelRefs
// };


// const db = require('../db');
// const Joi = require('@hapi/joi');

// const createLevelRefs = async() => {
// const levels = await Student.get();
// const matieres = await db.collection('matiere').get();
// const batch = db.batch();




//     const levels = await Level.get();
//     const batch = db.batch();
//     const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     levelArray.forEach((level) => {
//         const matiereId = level.matiere;
//         const matiereRef = matiere.doc(matiereId);
//         batch.update(Level.doc(level.id), { matiere: matiereRef });
//     });

//     matieres.forEach(matiere => {
//         const matiereRef = db.collection('matiere').doc(matiere.id);
//         batch.update(matiereRef, { matiere: matiereRef });
//     });
//     await batch.commit();
// };

// const matiereSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('matiere').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const levelschema = Joi.object({
//     level: Joi.string().required(),
//     matiere: matiereSchema.required(),
// });

// const Level = db.collection('Level');
// const matiere = db.collection('matiere');

// module.exports = {
//     Level,
//     levelschema,
//     matiere,
//     createLevelRefs,
// };

// models/level.js/correct

// const db = require('../db');
// const Joi = require('@hapi/joi');

// const createLevelRefs = async() => {
//     const levels = await Level.get();
//     const batch = db.batch();
//     const levelArray = levels.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     levelArray.forEach((level) => {
//         const matiereId = level.matiere;
//         const matiereRef = matiere.doc(matiereId);
//         batch.update(Level.doc(level.id), { matiere: matiereRef });
//     });

//     await batch.commit();
// };

// const matiereSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('matiere').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const levelschema = Joi.object({
//     level: Joi.string().required(),
//     matiere: matiereSchema.required(),
// });

// const Level = db.collection('Level');
// const matiere = db.collection('Matiere');

// module.exports = {
//     Level,
//     levelschema,
//     matiere,
//     createLevelRefs,
// };



// const db = require('../db');
// const Joi = require('@hapi/joi');

// const createLevelRefs = async() => {
//     const levels = await db.collection('Level').get();
//     const batch = db.batch();

//     const levelArray = levels.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     for (let i = 0; i < levelArray.length; i++) {
//         const level = levelArray[i];
//         const teachersRef = db
//             .collection('Teachers')
//             .doc(level.subject[0].split('/')[2]);
//         const matiereRef = db
//             .collection('matiere')
//             .doc(level.subject[1].split('/')[2]);

//         batch.update(db.collection('Level').doc(level.id), {
//             matiere: matiereRef,
//             teachers: teachersRef,
//         });
//     }

//     await batch.commit();
// };

// const matiereSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('matiere').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const teacherSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('Teachers').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// // const levelschema = Joi.object({
// //     level: Joi.string().required(),
// //     subject: Joi.array()
// //         .items(
// //             Joi.string().valid(/Teachers\/\w+/, /matiere\/\w+/)
// //         )
// //         .length(2)
// //         .required(),
// // });
// const levelschema = Joi.object({
//     level: Joi.string().required(),
//     subject: Joi.array()
//         .items(
//             Joi.object({
//                 teacher: Joi.string().valid(/^Teachers\/\w+$/),
//                 matiere: Joi.string().valid(/^matiere\/\w+$/),
//             })
//         )
//         .length(2)
//         .required(),

// });
// const Level = db.collection('Level');
// const matiere = db.collection('matiere');
// const teachers = db.collection('Teachers');

// module.exports = {
//     Level,
//     levelschema,
//     matiere,
//     teacherSchema,
//     createLevelRefs,
// };




// const createLevelRefs = async() => {
//     const levels = await db.collection('Level').get();
//     const batch = db.batch();

//     const levelArray = levels.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     for (let i = 0; i < levelArray.length; i++) {
//         const level = levelArray[i];
//         const teachersRef = db
//             .collection('Teachers')
//             .doc(level.subject[0].teacher.split('/')[1]);
//         const matiereRef = db
//             .collection('matiere')
//             .doc(level.subject[1].matiere.split('/')[1]);
//         batch.update(db.collection('Level').doc(level.id), {
//             matiere: matiereRef,
//             teachers: teachersRef,
//         });
//     }

//     await batch.commit();
// };

// const db = require('../db');
// const Joi = require('@hapi/joi');

// const createLevelRefs = async() => {
//     const levels = await db.collection('Level').get();
//     const batch = db.batch();

//     const levelArray = levels.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     for (let i = 0; i < levelArray.length; i++) {
//         const level = levelArray[i];
//         const teachersRef = db
//             .collection('Teachers')
//             .doc(level.subject[0].split('/')[1]);
//         const matiereRef = db
//             .collection('matiere')
//             .doc(level.subject[1].split('/')[1]);
//         batch.update(db.collection('Level').doc(level.id), {
//             matiere: matiereRef,
//             teachers: teachersRef,
//         });
//     }

//     await batch.commit();
// };

// const matiereSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('matiere').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const teacherSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('Teachers').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const levelschema = Joi.object({
//     level: Joi.string().required(),
//     subject: Joi.array()
//         .items(
//             Joi.object({
//                 teacher: Joi.string().valid(/^Teachers\/\w+$/),
//                 matiere: Joi.string().valid(/^matiere\/\w+$/),
//             })
//         )
//         .length(2)
//         .required(),
// });

// const Level = db.collection('Level');
// const matiere = db.collection('matiere');
// const teachers = db.collection('Teachers');

// module.exports = {
//     createLevelRefs,
//     matiereSchema,
//     teacherSchema,
//     levelschema,
//     Level,
//     matiere,
//     teachers,
// };



const db = require('../db');
const Joi = require('@hapi/joi');

const createLevelRefs = async() => {
    const levels = await db.collection('Level').get();
    const batch = db.batch();

    const levelArray = levels.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    for (let i = 0; i < levelArray.length; i++) {
        const level = levelArray[i];
        const teachersRef = [db.collection('Teachers').doc(level.subject[0].split('/')[2]),
            db.collection('Teachers').doc(level.subject2[0].split('/')[2])
        ];
        const matiereRef = [db.collection('matiere').doc(level.subject[1].split('/')[2]),
            db.collection('matiere').doc(level.subject2[1].split('/')[2])
        ];

        batch.update(db.collection('Level').doc(level.id), {
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

// const teacherSchema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('Teachers').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

const levelschema = Joi.object({
    level: Joi.string().required(),
    subject: Joi.array()
        .items(
            Joi.string().valid(/^matiere\/\w+$/)
        )
        .length(2)
        .required(),
    // subject2: Joi.array()
    //     .items(
    //         Joi.string().valid(/^matiere\/\w+$/)
    //     )
    //     .length(2)
    //     .required(),
});

const Level = db.collection('Level');
const matiere = db.collection('matiere');
const teachers = db.collection('Teachers');

module.exports = {
    Level,
    levelschema,
    matiere,
    // teacherSchema,
    createLevelRefs,
};