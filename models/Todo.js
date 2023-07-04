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
    type: Boolean,
    required: false
  }
});

module.exports = model('Todos', Todo);