const mongoose = require('mongoose')

const authSchema= mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    userType:{type:String},
})

const authModel=mongoose.model('authentication',authSchema)
module.exports=authModel
