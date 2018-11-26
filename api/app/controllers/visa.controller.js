const responses = require('../models/responses');
const visaService = require('../services/visa.service');

class VisaController {
  static merchantSearch(req, res) {

    visaService.merchantSearch(req.body, result => {
      // console.log(result.body);
      // console.log(result);
      // res.json(result.body);
      res.json(JSON.parse(result));
    });


    // visaService.merchantLocator(req.body)
    //   .then(merchants => {
    //     // console.log(merchants.data);
    //     console.log(Object.keys(merchants));
    //     // console.log(merchants);
    //     const responseModel = new responses.ItemsResponse();
    //     responseModel.items = merchants;
    //     res.status(200).json(merchants);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     res.status(500).send(new responses.ErrorResponse(error));
    //   });



    // const responseModel = new responses.SuccessResponse();
    // res.status(200).json(responseModel);
  }
}

module.exports = VisaController;
