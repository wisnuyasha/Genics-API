const {
  Schema,
  model
} = require("mongoose");

const Todo = Schema({
  todo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  checklist: {
    type: String,
    required: false
  }
});

module.exports = model('Todos', Todo);