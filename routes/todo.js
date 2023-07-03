const router = require("express").Router();
const {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.get('/', getTodo);

router.post('/', saveTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;