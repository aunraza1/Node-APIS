const mongoose =require('mongoose')

const hotelSchmea= mongoose.Schema({
    hotelName:{type:String},
    hotelLocation:{type:String},
    hotelRatings:{type:String},
    ownerID:{type:String},
    ownerName:{type:String},
    singlePrice:{type:Number},
    doublePrice:{type:Number},
    queenPrice:{type:Number},
    kingPrice:{type:Number},
    imgUrl:{type:String}
})
const hotelModel=mongoose.model('hotelModel',hotelSchmea)
module.exports=hotelModel