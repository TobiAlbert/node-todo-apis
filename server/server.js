const {ObjectID} = require('mongodb'); 

var express = require('express'),
    bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose'),
      {Todo} = require('./models/todo'),
      {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    res.status(404).send("invalid id");
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send();
    }

    res.status(200).send({todo});  // passed todo as object so other properties can be added
  }).catch((e) => {
    res.status(400).send();
  });
  
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = {app};

