const todos = [];

function getAll() {
  return todos;
};
function addOne(todo) {
  todos.push(todo);
};

function deleteOne(idx) {
  todos.splice(idx, 1)
};

module.exports = {
  getAll,
  addOne,
  deleteOne
}