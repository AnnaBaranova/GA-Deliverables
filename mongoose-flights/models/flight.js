const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX','SAN'],
        default: 'DEN',
    },
    mflightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let day = new Date();
            let date = day.getDate();
            let month = day.getMonth();
            let year = day.getFullYear();
            let newDay = new Date (year+1, month, date);
            return newDay
          },
    }
  });

  module.exports = mongoose.model('Flight', flightSchema);