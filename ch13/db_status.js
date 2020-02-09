var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/test", function(err, db) {
    var adminDB = db.db("admin").admin();
    adminDB.serverStatus(function(err, status){
        console.log(status);
        db.close();
    });
});
