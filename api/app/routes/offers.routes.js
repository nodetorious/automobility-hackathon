const router = require('express').Router()
const offerController = require('../controllers/offer.controller')
// const vaidateBody = require('../filters/validate.body')

module.exports = router
//  api routes ======================================================
router.get('/dataByMerchant', offerController.readAll)
router.get('/getAllOffers', offerController.getAll)
