const Todos = require("../data/todos");

function index (req, res) {
    res.render('index', {
        title: 'Unit-2-Assessment',
        todos: Todos.getAll()
    });
};


module.exports = {
    index,
}