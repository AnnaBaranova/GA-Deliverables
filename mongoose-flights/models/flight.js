const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
},
    {
        timestamps: true
    });

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default() {
            let day = new Date();
            day.setFullYear(d.getFullYear() + 1);
            return day
        }
    },
    destinations:[destinationSchema],
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Flight', flightSchema);