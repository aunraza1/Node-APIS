const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app =express()
const mongoose=require('mongoose')
const mainRouter = require('./Routers/mainRouter')


mongoose.connect('mongodb+srv://Aun:cheapfly12@cluster0.i0eyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log("Database Not Connected!",err)
    }
    else{
        console.log("Connected TO MongoDb")
    }
})
app.use(cors())

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())
app.use(mainRouter)



let port =process.env.PORT ||5000
app.listen(port,()=>console.log("Listening on Port "+port))
