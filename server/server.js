var mongoose = require('mongoose');

// use promises on mongoose
mongoose.Promise = global.Promise;
// connect mongoose to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create model
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'cook dinner'
// });

var newTodo = new Todo({
  text: 'Study lessons',
  completed: true,
  completedAt: new Date().getTime()
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (err) => {
  console.log('Unable to save Todo')
});

