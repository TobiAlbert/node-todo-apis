var mongoose = require('mongoose');

// use promises on mongoose
mongoose.Promise = global.Promise;
// connect mongoose to db
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};