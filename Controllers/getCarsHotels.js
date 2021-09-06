const BookingModel = require('../Models/bookingSchema')
const carsModel = require('../Models/carsSchema')
const hotelModel = require('../Models/hotelSchema')
const tourModel = require('../Models/tourSchema')


const getCars= async(req,res)=>{
    const getCars = await carsModel.find({})
    res.send({message:"Here are all available Cars",getCars})
}

const getHotels=async(req,res)=>{
    const getHotels= await hotelModel.find({})
    res.send({message:"Here are all Available Hotels",getHotels})
}

const getTours= async(req,res)=>{
    const getTours= await tourModel.find({})
    res.send({message:"Here are all Available Hotels",getTours})

}

const getFalseBooking= async(req,res)=>{
 const check = await BookingModel.find({'obj.bookingStatus':false , 'obj.ownerId':123})
 if(check.length){
     res.send(check)
 }
 else{
     res.send("No Pending Bookings")
 }
}
    const getActiveBooking= async(req,res)=>{
        const check = await BookingModel.find({'obj.bookingStatus':true , 'obj.ownerId':123})
        if(check.length){
            res.send(check)
        }
        else{
            res.send("No Active Bookings")
        }
       
    }
module.exports={
    getCars,
    getHotels,
    getTours,
    getFalseBooking,
    getActiveBooking
}