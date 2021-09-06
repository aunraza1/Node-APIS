const express = require('express')
const router = express.Router();
const {getCars,getHotels, getTours,getFalseBooking,getActiveBooking} = require('../Controllers/getCarsHotels')
router.get('/allcars',getCars)
router.get('/allhotels',getHotels)
router.get('/alltours',getTours)
router.get('/pendingbookings',getFalseBooking)
router.get('/activebookings',getActiveBooking)
module.exports=router