const responses = require('../models/responses');
const visaService = require('../services/visa.service');

class VisaController {
  static merchantSearch(req, res) {
    visaService.merchantSearch(req.body, result => {
      res.json(JSON.parse(result).merchantSearchServiceResponse);
    });
  }

  static merchantLocator(req, res) {
    visaService.merchantLocator(req.body, result => {
      res.json(JSON.parse(result).merchantLocatorServiceResponse);
    })
  }

  static queueInsights(req, res) {
    visaService.queueInsights(req.body, result => {
      res.json(JSON.parse(result));
    });
  }
}

module.exports = VisaController;
