// const db = require('../db');

// const teachersschema = {
//     Name: {
//         type: 'string',
//         required: true
//     },
//     level: {
//         type: 'string',
//         required: true,
//         ref: 'Level'
//     },


// };
// const Level = db.collection('Level');
// const Teacher = db.collection("Teachers");
// // const classroom = db.collection('classroom');
// // const matiere = db.collection('matiere');
// const createLevelRefs = async() => {
//     const teachers = await Teacher.get();
//     const batch = db.batch();
//     const teacherArray = teachers.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     teacherArray.forEach((teacher) => {
//         const levelId = teacher.level;
//         // const classroomId = teacher.classroomname;
//         // const matiereId = teacher.Name;
//         const levelRef = Level.doc(levelId);
//         // const classroomRef = Level.doc(classroomId);
//         // const matiereRef = Level.doc(matiereId);
//         batch.update(Teacher.doc(teacher.id), { level: levelRef });
//         // batch.update(Teacher.doc(teacher.id), { level: levelRef }, { level: classroomRef });
//     });
//     await batch.commit();
// };


// module.exports = {
//     Teacher,
//     teachersschema,
//     Level,
//     createLevelRefs,
//     // classroom
// };



// const db = require('../db');
// const Joi = require('@hapi/joi');

// // const createLevelRefs = async() => {
// //     const teachers = await db.collection('Teachers').get();
// //     const batch = db.batch();

// //     const teacherArray = teachers.docs.map((doc) => ({
// //         id: doc.id,
// //         ...doc.data(),
// //     }));
// //     for (let i = 0; i < teacherArray.length; i++) {
// //         const teacher = teacherArray[i];

// //         const levelRefs = [];
// //         for (let j = 0; j < teacher.level.length; j++) {
// //             const levelRef = db.collection('Level').doc(teacher.level[j]);
// //             levelRefs.push(levelRef);
// //         }

// //         batch.update(db.collection('Teachers').doc(teacher.id), {
// //             level: levelRefs,
// //         });
// //     }

// const createLevelRefs = async() => {
//     const levels = await db.collection('Teachers').get();
//     const batch = db.batch();

//     const levelArray = levels.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));

//     for (let i = 0; i < levelArray.length; i++) {
//         const teacher = teacherArray[i];
//         const levelRef = [db.collection('Level').doc(teacher.level[0].split('/')[2]),
//             db.collection('Level').doc(teacher.level[0].split('/')[2])
//         ];
//         const levRef = [db.collection('Level').doc(teacher.subject[1].split('/')[2]),
//             db.collection('matiere').doc(teacher.subject2[1].split('/')[2])
//         ];

//         batch.update(db.collection('Teachers').doc(teacher.id), {
//             level: levelRef,
//             level: levRef,
//         });
//     }

//     await batch.commit();
// };
// // await batch.commit();
// // };

// const levelschema = Joi.string().custom(async(value, helpers) => {
//     const docRef = db.collection('Level').doc(value);
//     const doc = await docRef.get();
//     if (!doc.exists) {
//         return helpers.error('any.invalid');
//     }
//     return value;
// });

// const teachersschema = Joi.object({
//     Name: Joi.string().required(),
//     level: Joi.array().items(
//         Joi.string().valid(/^Level\/\w+$/)
//     ).required(),
// });

// const Level = db.collection('Level');
// const matiere = db.collection('matiere');
// const Teacher = db.collection('Teachers');

// module.exports = {
//     Level,
//     teachersschema,
//     createLevelRefs,
//     Teacher,
//     levelschema,
// };


// const Joi = require('@hapi/joi');
// const db = require('../db');

// const matiereRefSchema = Joi.object({
//     ref: Joi.string().required(),
// });

// const teacherSchema = Joi.object({
//     Name: Joi.string().required(),
//     level: Joi.array().items(Joi.string().required()),
//     matiere: Joi.array().items(matiereRefSchema).required(),
// });

// const matiereRef = (ref) => db.collection('matiere').doc(ref);

// const createMatiereRefs = async() => {
//     const teachers = await db.collection('Teachers').get();
//     const batch = db.batch();

//     teachers.forEach((teacherDoc) => {
//         const teacher = teacherDoc.data();
//         const matiereRefs = teacher.matiere.map((m) => matiereRef(m.ref));
//         const teacherRef = db.collection('Teachers').doc(teacherDoc.id);

//         batch.update(teacherRef, { matiere: matiereRefs });
//     });

//     await batch.commit();
// };

// module.exports = {
//     teacherSchema,
//     createMatiereRefs,
// };

// const Joi = require('@hapi/joi');
// const db = require('../db');

// // const matiereRefSchema = Joi.object({
// //     ref: Joi.string().required(),
// // });

// const teacherSchema = Joi.object({
//     Name: Joi.string().required(),
//     level: Joi.array().items(Joi.string().required()),
//     matiere: Joi.array().items(Joi.string().pattern(/^matiere\/\w+$/)).required()
// });

// const matiereRef = (ref) => db.collection('matiere').doc(ref);

// const createMatiereRefs = async() => {
//     const teachers = await db.collection('Teachers').get();
//     const batch = db.batch();

//     teachers.forEach((teacherDoc) => {
//         const teacher = teacherDoc.data();
//         const matiereRefs = teacher.matiere.map((m) => matiereRef(m.ref));
//         const teacherRef = db.collection('Teachers').doc(teacherDoc.id);

//         batch.update(teacherRef, { matiere: matiereRefs });
//     });

//     await batch.commit();
// };

// module.exports = {
//     teacherSchema,
//     createMatiereRefs,
// };


const Joi = require('@hapi/joi');
const db = require('../db');

const teacherSchema = Joi.object({
    Name: Joi.string().required(),
    level: Joi.array().items(Joi.string().required()),
    matiere: Joi.array().items(Joi.object({
        ref: Joi.string().pattern(/^\/matiere\/\w+$/).required(),
        // optionally, you can add other properties that you expect to be present in the "matiere" document
    })).required()

});

const matiereRef = (ref) => db.collection('matiere').doc(ref);

const createMatiereRefs = async() => {
    const teachers = await db.collection('Teachers').get();
    const batch = db.batch();

    teachers.forEach(async(teacherDoc) => {
        const teacher = teacherDoc.data();
        const matiereRefs = teacher.matiere.map(async(m) => {
            const matiereDoc = await db.doc(m).get();
            const matiereData = matiereDoc.data();
            return { ref: m, Name: matiereData.Name };
        });
        const updatedMatiereRefs = await Promise.all(matiereRefs);

        const teacherRef = db.collection('Teachers').doc(teacherDoc.id);
        batch.update(teacherRef, { matiere: updatedMatiereRefs });
    });
    await batch.commit();
};

module.exports = {
    teacherSchema,
    createMatiereRefs,
};