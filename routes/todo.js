const router = require("express").Router();
const {
    getTodo,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.get('/', getTodo);

router.get('/:id', getTodoById);

router.post('/', saveTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;