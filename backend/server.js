const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`rest api start at port ${port}`);
});