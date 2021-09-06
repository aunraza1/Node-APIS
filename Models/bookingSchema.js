const mongoose= require('mongoose')
const carBookingSchema = require('./carBookingSchema')
const hotelBookingSchema= require('./hotelBookingSchema')

const bookingSchema =mongoose.Schema({
    type:{type:String},
    carBookingSchema: {type:carBookingSchema},
    hotelBookingSchema:hotelBookingSchema,
})

const BookingModel= mongoose.model('bookingSchema',bookingSchema)
module.exports=BookingModel


