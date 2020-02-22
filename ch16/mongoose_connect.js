var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/words');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we're conneted!");
    console.log(mongoose.connection.db.collections);
});
// mongoose.connection.on('open', function () {
//     console.log(mongoose.connection.collection);
//     mongoose.connection.db.listCollections(function (err, names) {
//         console.log(names);
//         mongoose.disconnect();
//     });
// });