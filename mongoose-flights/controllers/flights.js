const Flight = require('../models/flight');

function allFlights(req, res){
    Flight.find({}, function (err, flights) {

        if (err) {
            return console.log(err);
        }
        res.render('flights/index', { title: 'All Flights', flights});
    })
};

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
};

function create (req, res){
    const flight = new Flight(req.body);
    console.log(flight);
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
      });

}


module.exports = {
    index: allFlights,
    new: newFlight,
    create
}