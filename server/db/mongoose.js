var mongoose = require('mongoose');

// use promises on mongoose
mongoose.Promise = global.Promise;
// connect mongoose to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};