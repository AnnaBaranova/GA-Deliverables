var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);


module.exports = router;
