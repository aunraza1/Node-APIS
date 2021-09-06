const express= require('express')
const router = express.Router()
const addBookings = require('../Controllers/addBookings')
router.post('/book',addBookings)
module.exports=router