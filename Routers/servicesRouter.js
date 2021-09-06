const express=require('express')
const router = express.Router()
const {addCar,addHotels,addTours} = require('../Controllers/addServiceController')
router.post('/addcar',addCar)
router.post('/addHotel',addHotels)
router.post('/addTour',addTours)



module.exports=router