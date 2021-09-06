const mongoose= require('mongoose')
const carBookingSchema = require('./carBookingSchema')
const hotelBookingSchema= require('./hotelBookingSchema')

const bookingSchema =mongoose.Schema({
    type:{type:String},
    obj: {type:hotelBookingSchema} || {type:carBookingSchema},
    
 
})

const BookingModel= mongoose.model('bookingSchema',bookingSchema)
module.exports=BookingModel


