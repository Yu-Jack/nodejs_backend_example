var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sum = new Schema({
    number: Number
});
var sum_string = 'this is sum js';

// export to other js use
module.exports = mongoose.model('sum', Sum);
