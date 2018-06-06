const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'),
      {Todo}   = require('../server/models/todo'),
      {User}   = require('../server/models/user');

// var id = '5b16688f8585b32a74f81d3a';
var userId = '5b15f8cc10f9a415b0b2978a';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById
User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));