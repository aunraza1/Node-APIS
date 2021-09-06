const mongoose = require('mongoose')

const CarSchema= mongoose.Schema({
    carName:{type:String},
    registrationNumber:{type:String},
    carSegment:{type:String},
    carMake:{type:String},
    hourlyPrice:{type:Number},
    ownerID:{type:String},
    ownerName:{type:String},
    imgUrl:{type:String},
    location:{tpye:String}
})

const carModel= mongoose.model('carModel',CarSchema)
module.exports=carModel

