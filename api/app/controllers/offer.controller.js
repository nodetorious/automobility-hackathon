const responses = require('../models/responses')
const offerService = require('../services/offers.service')

module.exports = {
    readAll: readAll,
    getAll: getAll
    // readById: readById,
    // create: create,
    // update: update,
    // delete: _delete
}
function readAll(req, res) {
    offerService.dataByMerchant()
        .then(offers => {
            const responseModel = new responses.ItemResponse()
            responseModel.items = offers
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}
function getAll(req, res) {
    offerService.getAllOffers()
        .then(offers => {
            const responseModel = new responses.ItemResponse()
            responseModel.items = offers
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}
getAll()
