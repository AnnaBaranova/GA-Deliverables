const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket', flightId: req.params.id });
}

function create (req, res){
    console.log(req.params.id);
    const flightId = req.params.id;
   const ticket = new Ticket(req.body);
    ticket.flight = flightId;
    ticket.save(function(err){
      res.redirect(`/flights/${flightId}`);  
    })  
};

function deleteTicket (req, res) {
Ticket.findOneAndDelete(req.params.ticketId, function (err, ticket){
    res.redirect(`/flights/${req.params.flightId}`); 
});
};


module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
}