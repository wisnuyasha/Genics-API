const Todo = require("../models/Todo");

// Get all todos
const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      message: "Get todos success",
      data: todos,
    });
  } catch (err) {
    res.status(500).json({
      message: "Get todos failed",
      data: err,
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Get todo by id success",
      data: todo,
    });
  } catch (err) {
    res.status(500).json({
      message: "Get todo by id failed",
      data: err,
    });
  }
};

// Save a todo
const saveTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(200).json({
      message: "Add todo success",
      data: savedTodo,
    });
  } catch (err) {
    res.status(500).json({
      message: "Add todo failed",
      data: err,
    });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Update todo success",
      data: updatedTodo,
    });
  } catch (err) {
    res.status(500).json({
      message: "Update todo failed",
      data: err,
    });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete todo success",
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete todo failed",
      data: err,
    });
  }
};

module.exports = {
  getTodo,
  getTodoById,
  saveTodo,
  updateTodo,
  deleteTodo,
};
