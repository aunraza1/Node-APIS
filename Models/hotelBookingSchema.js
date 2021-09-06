const mongoose = require('mongoose')


const hotelBookingSchema= mongoose.Schema({
    bookingStatus:{type:Boolean},
    hotelName:{type:String},
    checkInDate:{type:String},
    days:{type:Number},
    hotelLocation:{type:String},
    hotelRatings:{type:String},
    ownerId:{type:Number},
    ownerName:{type:Number},
    price:{type:Number},
    userName:{type:String},
    userId:{type:String}

})
module.exports=hotelBookingSchema