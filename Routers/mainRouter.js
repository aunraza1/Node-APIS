const express= require('express')
const router = express.Router()

router.use('/auth',require('./authRouter'))
router.use('/services',require('./servicesRouter'))
router.use('/services',require('./bookRouter'))
router.use('/show',require('./showRouter'))

module.exports=router