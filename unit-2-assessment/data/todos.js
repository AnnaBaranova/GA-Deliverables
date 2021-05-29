const todos = [];

function getAll() {
  return todos;
};
function addOne(todo) {
  todos.push(todo);
}

module.exports = {
  getAll,
  addOne
}