const BookingModel = require('../Models/bookingSchema');


const addBookings = async (req, res) => {

    if (req.body.type == "car" && req.body.carBookingSchema) {
        let booking = new BookingModel(
            {
                type: req.body.type,
                carBookingSchema: req.body.carBookingSchema,
                hotelBookingSchema:null,
            })
            booking.save().then(()=>{
                res.send({message:"Booking added Please Wait for confirmation",result:booking})
            }).catch(()=>{
                res.send("Booking Failed!")
            })
        }
       else if(req.body.type=="hotel" && req.body.hotelBookingSchema){
         
        let booking=new BookingModel({
            type:req.body.type,
            hotelBookingSchema:req.body.hotelBookingSchema,
            carBookingSchema:null
        })
        booking.save().then(()=>{
            res.send({message:"Booking added Please Wait for confirmation",result:booking})
        }).catch(()=>{
            res.send("Booking Failed!")
        })

       }
       else{
           res.send("Booking Type Invalid")
       }

}
module.exports = addBookings