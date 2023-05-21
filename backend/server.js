// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const db = require('./db');
// // const rl = require('./real');
// // const userRouter = require('./router/users')(db);
// // const studentRouter = require('./router/students')(db);
// // const levelRouter = require('./router/level')(db);
// // const teacherRouter = require('./router/teachers')(db);
// // const classroomsRouter = require('./router/classrooms')(db);
// // const matiereRouter = require('./router/matiere')(db);
// // const attendanceRouter = require('./router/attendance')(db);
// // const rlattendanceRouter = require('./router/rlattendance')(rl);
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // app.use('/users', userRouter);
// // app.use('/students', studentRouter);
// // app.use('/level', levelRouter);
// // app.use('/teachers', teacherRouter);
// // app.use('/classrooms', classroomsRouter);
// // app.use('/matiere', matiereRouter);
// // app.use('/attendance', attendanceRouter);
// // app.use('/rlattendance', rlattendanceRouter);
// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //     console.log(`rest api start at port ${port}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const db = require('./db');
// const rl = require('./real');
// const userRouter = require('./router/users')(db);
// const studentRouter = require('./router/students')(db);
// const levelRouter = require('./router/level')(db);
// const teacherRouter = require('./router/teachers')(db);
// const classroomsRouter = require('./router/classrooms')(db);
// const matiereRouter = require('./router/matiere')(db);
// const attendanceRouter = require('./router/attendance')(db);
// const rlattendanceRouter = require('./router/rlattendance')(rl);

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/users', userRouter);
// app.use('/students', studentRouter);
// app.use('/level', levelRouter);
// app.use('/teachers', teacherRouter);
// app.use('/classrooms', classroomsRouter);
// app.use('/matiere', matiereRouter);
// app.use('/attendance', attendanceRouter);
// app.use('/rlattendance', rlattendanceRouter);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Rest API started at port ${port}`);
// });



// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const db = require('./db');

// // const userRouter = require('./router/users')(db);
// // const studentRouter = require('./router/students')(db);
// // const levelRouter = require('./router/level')(db);
// // const teacherRouter = require('./router/teachers')(db);
// // const classroomsRouter = require('./router/classrooms')(db);
// // const matiereRouter = require('./router/matiere')(db);
// // const attendanceRouter = require('./router/attendance')(db);

// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // // Add Realtime Database middleware
// // app.use((req, res, next) => {
// //     req.realtimeDbRef = require('../real').ref('/Test Value/Value');
// //     next();
// // });

// // app.use('/users', userRouter);
// // app.use('/students', studentRouter);
// // app.use('/level', levelRouter);
// // app.use('/teachers', teacherRouter);
// // app.use('/classrooms', classroomsRouter);
// // app.use('/matiere', matiereRouter);
// // app.use('/attendance', attendanceRouter);

// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //     console.log(`rest api start at port ${port}`);
// // });
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const db = require('./db');
// // const rl = require('./real');
// const bas = require('./getdata')
// const userRouter = require('./router/users')(db);
// const studentRouter = require('./router/students')(db);
// const levelRouter = require('./router/level')(db);
// const teacherRouter = require('./router/teachers')(db);
// const classroomsRouter = require('./router/classrooms')(db);
// const matiereRouter = require('./router/matiere')(db);
// const attendanceRouter = require('./router/attendance')(db);
// // const rlattendanceRouter = require('./router/rlattendance')(rl);

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Add Realtime Database middleware
// app.use((req, res, next) => {
//     req.realtimeDbRef = require('./real').ref('/Test Val');
//     next();
// });

// app.use('/users', userRouter);
// app.use('/students', studentRouter);
// app.use('/level', levelRouter);
// app.use('/teachers', teacherRouter);
// app.use('/classrooms', classroomsRouter);
// app.use('/matiere', matiereRouter);
// app.use('/attendance', attendanceRouter);
// // app.use('/rlattendance', rlattendanceRouter);
// app.get("/real/", function(req, res) {
//     bas._getData(function(data) {
//         res.send({ "status": "200", "statuscode": "1", "result": data });
//     })
// });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Rest API started at port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const bas = require('./getdata');
const clas = require('./getdataclass')
const { router } = require("express/lib/application");
const { firebase } = require('./class');
// const clas = require('./getdataclass');

// Your server code

const userRouter = require('./router/users')(db);
const studentRouter = require('./router/students')(db);
const levelRouter = require('./router/level')(db);
const teacherRouter = require('./router/teachers')(db);
const classroomsRouter = require('./router/classrooms')(db);
const matiereRouter = require('./router/matiere')(db);
const attendanceRouter = require('./router/attendance')(db);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/students', studentRouter);
app.use('/level', levelRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomsRouter);
app.use('/matiere', matiereRouter);
app.use('/attendance', attendanceRouter);
// const attendanceUpdate = require('./routes/attendanceUpdate');
// app.use('/attendance', attendanceUpdate);

app.get("/real", function(req, res) {
    bas._getData(function(data) {
        if (data !== null) {
            res.send({ status: "success", result: data });
        } else {
            res.status(500).send({ status: "error", message: "Failed to retrieve data" });
        }
    });
});
app.get("/classroom", function(req, res) {
    clas._getdataclass(function(data) {
        if (data !== null) {
            res.send({ status: "success", result: data });
        } else {
            res.status(500).send({ status: "error", message: "Failed to retrieve data" });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Rest API started at port ${port}`);
});