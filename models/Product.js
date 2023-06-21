const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - price: Number

const Project = Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
});


module.exports = model('Products', Product);