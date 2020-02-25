var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var wordSchema = new Schema({
    word: {type: String, index: 1, required: true},
    first: {type: String, index: 1},
    last: String,
    size: Number,
    letters: [String],
    stats: {
        vowels: Number,
        consonants: Number
    },
    charsets: [{
        type: String,
        chars: [String]
    }]
},{collection: 'word_stats'});
//past code,problem is "unique: true"
// var wordSchema = new Schema({
//     word: {type: String, index: 1, required:true, unique: true},
//     first: {type: String, index: 1},
//     last: String,
//     size: Number,
//     letters: [String],
//     stats: {
//         vowels:Number, consonants:Number},
//     charsets: [{ type: String, chars: [String]}]
// }, {collection: 'word_stats'});
wordSchema.methods.startsWith = function(letter){
    return this.first === letter;
};
exports.wordSchema = wordSchema;
console.log("Required Paths: ");
console.log(wordSchema.requiredPaths());
console.log("Indexes: ");
console.log(wordSchema.indexes());
// var s = new Schema({
//     name: { type: String, required: true },
//     age: { type: String, required: true },
//     notes: String
// });
// s.requiredPaths(); // [ 'age', 'name' ]
// console.log(s.requiredPaths());