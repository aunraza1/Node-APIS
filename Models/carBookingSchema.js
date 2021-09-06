const mongoose = require('mongoose')


const carBookingSchema = mongoose.Schema({
    bookingStatus: { type: Boolean },
    carName: { type: String },
    carSegment: { type: String },
    carMake: { type: String },
    contactNo: { type: String },
    date: { type: String },
    duration: { type: Number },
    hourlyRate: { type: Number },
    location: { type: String },
    ownerId: { type: String },
    userName: { type: String },
    userId: { type: String }

})
module.exports = carBookingSchema