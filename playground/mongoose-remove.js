const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'),
      {Todo}   = require('../server/models/todo'),
      {User}   = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: '5b1bc06932300e5f19743a3b'}).then((doc) => {
    // ...do something
});


// Todo.findByIdAndRemove('5b1bc06932300e5f19743a3b').then((doc) => {
//   console.log(doc);
// });