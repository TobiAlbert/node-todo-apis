// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b0d54fc74096d20ca325280')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Evangeline'
  }, {
    $set: {
      name: 'Adams'
    },
    $inc: {
      age: 19
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});