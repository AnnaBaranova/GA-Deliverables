var express = require('express');
var router = express.Router();
const todosRouter = require('../controllers/todos')

/* GET home page. */
router.get('/', todosRouter.index);
router.post('/', todosRouter.create)

module.exports = router;
