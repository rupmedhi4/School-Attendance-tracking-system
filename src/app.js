const express = require('express')
const connectedDb = require('./config/db')
const classRoutes = require('./routes/classRoutes');
const subjectRoutes = require('./routes/subjectRoute');
const studentRoute = require('./routes/studentsRoute');
const attendanceRoutes = require('./routes/attendanceRoutes');

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 4000

// Middleware for parsing JSON
app.use(express.json());

// Class routes
app.use('/classes', classRoutes);
app.use('/classes', subjectRoutes);
app.use('/classes', studentRoute);
app.use('/classes', attendanceRoutes);









connectedDb().then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
        console.log("app is running on port " + PORT);
    })
}).catch((err) => {
    console.log(`db not connected ${err}`);

})

