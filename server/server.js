var mongoose = require('mongoose');

// use promises on mongoose
mongoose.Promise = global.Promise;
// connect mongoose to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true // removes leading or trailing white spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: ' Edit this '
// });


// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save Todo')
// });

// User
// email - require - trim - set min length
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  }
});

var newUser = new User({
  email: 'saji@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved User', doc);
}, (err) => {
  console.log('Unable to add User');
});