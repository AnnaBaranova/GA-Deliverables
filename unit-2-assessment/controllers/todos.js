const Todos = require("../data/todos");

function index(req, res) {
    res.render('index', {
        title: 'Unit-2-Assessment',
        todos: Todos.getAll()
    });
};

function create(req, res) {
    console.log(req.body)
    const todo = {
        todo: req.body.todo,
        done: false
    }
    Todos.addOne(todo)
    res.redirect('/')
}

module.exports = {
    index,
    create,
}