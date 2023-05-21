const firebase = require('./real');
const attendance = require('./router/attendance');
const db = require('./db');
const attendanceRouter = require('./router/attendance');
const { att } = require('./router/attendance');
module.exports = {
    _getData: function(callback) {
        firebase.ref("Test Val/").once("value")
            .then(function(snapshot) {
                callback(snapshot.val());
            })
            .catch(function(error) {
                console.error("Error retrieving data:", error);
                callback(null);
            });
    }

};