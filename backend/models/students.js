// const db = require('../db');
// const studentschema = {
//     Name: {
//         type: 'string',
//         required: true
//     },
//     level: {
//         type: 'string',
//         required: true,
//         ref: 'Level'
//     },
//     classroomname: {
//         type: 'array',
//         items: {
//             type: 'string',
//             pattern: /^classroom\/\w+$/
//         },
//         required: true
//     }
// };


// // const Level = db.collection('Level');
// // const Student = db.collection('students');
// // const createLevelRefs = async() => {
// //     const students = await Student.get();
// //     const batch = db.batch();
// //     const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //     studentArray.forEach((student) => {
// //         const levelId = student.level;
// //         const levelRef = Level.doc(levelId);
// //         batch.update(Student.doc(student.id), { level: levelRef });
// //     });
// //     await batch.commit();
// // };
// const Level = db.collection('Level');
// const Student = db.collection('students');
// const Classroom = db.collection('classroom');
// const createLevelRefs = async() => {
//     const students = await Student.get();
//     const batch = db.batch();
//     const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     studentArray.forEach(async(student) => {
//         const levelId = student.level;
//         const levelRef = Level.doc(levelId);
//         batch.update(Student.doc(student.id), { level: levelRef });

//         const classroomNames = student.classroomname;
//         const classroomRefs = [];
//         for (let i = 0; i < classroomNames.length; i++) {
//             const classroomName = classroomNames[i];
//             const classroom = await Classroom.where('name', '==', classroomName).get();
//             if (classroom.empty) {
//                 console.log(`No classroom found with name ${classroomName}`);
//             } else {
//                 const classroomRef = classroom.docs[0].ref;
//                 classroomRefs.push(classroomRef);
//             }
//         }
//         batch.update(Student.doc(student.id), { classroomname: classroomRefs });
//     });
//     await batch.commit();
// };

// module.exports = {
//     Student,
//     studentschema,
//     Level,
//     createLevelRefs
// };


const db = require('../db');
const Joi = require('joi');

const studentSchema = Joi.object({
    Name: Joi.string().required(),
    level: Joi.string().pattern(/^Level\/\w+$/).required(),
    classroomname: Joi.array().items(Joi.string().pattern(/^classroom\/\w+$/)).required()
});

const Level = db.collection('Level');
const Student = db.collection('students');
const Classroom = db.collection('classroom');

const createLevelRefs = async() => {
    const students = await Student.get();
    const batch = db.batch();
    const studentArray = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    studentArray.forEach(async(student) => {
        const levelId = student.level;
        const levelRef = Level.doc(levelId);
        batch.update(Student.doc(student.id), { level: levelRef });

        const classroomNames = student.classroomname;
        const classroomRefs = [];
        for (let i = 0; i < classroomNames.length; i++) {
            const classroomName = classroomNames[i];
            const classroom = await Classroom.where('name', '==', classroomName).get();
            if (classroom.empty) {
                console.log(`No classroom found with name ${classroomName}`);
            } else {
                const classroomRef = classroom.docs[0].ref;
                classroomRefs.push(classroomRef);
            }
        }
        batch.update(Student.doc(student.id), { classroomname: classroomRefs });
    });
    await batch.commit();
};

module.exports = {
    Student,
    studentSchema,
    Level,
    createLevelRefs
};