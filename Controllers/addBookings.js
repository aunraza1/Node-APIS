const BookingModel = require('../Models/bookingSchema');

const addBookings = async (req, res) => {
  
        let booking = new BookingModel(req.body)
            booking.save().then(()=>{
                res.send({message:"Booking added Please Wait for confirmation",result:booking})
            }).catch(()=>{
                res.send("Booking Failed!")
            })
 

}
module.exports = addBookings