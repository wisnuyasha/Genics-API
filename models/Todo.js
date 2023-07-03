const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - price: Number

const Todo = Schema({
  todo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});


module.exports = model('Todos', Todo);