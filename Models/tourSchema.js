const mongoose = require('mongoose')


const tourSchema = mongoose.Schema({
    tourName:{type:String},
    tourPrice:{type:Number},
    tourStartDate:{type:String},
    tourStay:{type:String},
    imgUrL:{type:String},
    ownerId:{type:String}
})

const tourModel = mongoose.model('Tour',tourSchema)
module.exports=tourModel


