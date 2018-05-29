// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); // destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // fetching all documents
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // fetch todos with values=false
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // fetch by id
  // db.collection('Todos').find({ 
  //   _id: new ObjectID('5b0c2ee9e579bb2ee06efaf7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // to count number of documents
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // fetch with names
  db.collection('Users').find({name: 'Ariadne'}).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to get User', err);
  });
  
  // db.close();
});