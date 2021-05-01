const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket' });
}


module.exports = {
    new: newTicket,
}