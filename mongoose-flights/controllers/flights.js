const Flight = require('../models/flight');

function allFlights(req, res){
    Flight.find({}, function (err, flights) {

        if (err) {
            return console.log(err);
        }
        res.render('flights/index', {flights});
    })
}


module.exports = {
    index: allFlights
}