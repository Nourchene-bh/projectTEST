const realtimeDb = require('./class');

module.exports = {
    _getdataclass: function(callback) {
        realtimeDb.ref("state/").once("value")
            .then(function(snapshot) {
                callback(snapshot.val());
            })
            .catch(function(error) {
                console.error("Error retrieving data:", error);
                callback(null);
            });
    }
};