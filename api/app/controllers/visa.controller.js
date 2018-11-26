const responses = require('../models/responses');
// const visaService = require('../services/visa.service');

class VisaController {
  static merchantSearch(req, res) {
    // visaService.merchantSearch()
    const responseModel = new responses.SuccessResponse();
    res.status(200).json(responseModel);
  }
}

module.exports = VisaController;
