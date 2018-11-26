// const axios = require('axios');
const https = require('https');
const request = require('request');
const req = request.defaults();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

class VisaService {
  static merchantSearch(body, onSuccess) {
    const keyFile = path.join(__dirname, '..', '..', 'secrets', 'key_8f8104b5-b24a-4007-9f88-a0797d1d8ce7.pem');
    const certificateFile = path.join(__dirname, '..', '..', 'secrets', 'cert.pem');
    const userId = process.env.VISA_USERID;
    const password = process.env.VISA_PASSWORD;

    // return axios.request({
    //   method: 'post',
    //   // url: 'https://sandbox.api.visa.com/merchantlocator/v1/locator',
    //   url: 'https://sandbox.api.visa.com/merchantsearch/v1/search',
    //   auth: {
    //     username: userId,
    //     password: password
    //   },
    //   data: body,
    //   httpsAgent: new https.Agent({
    //     cert: fs.readFileSync(certificateFile),
    //     key: fs.readFileSync(keyFile),
    //     // auth: 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
    //     // auth: 'user:password',
    //     // rejectUnauthorized: false
    //   })
    // });

    return req.post({
      // uri: 'https://sandbox.api.visa.com/merchantlocator/v1/locator',
      uri: 'https://sandbox.api.visa.com/merchantsearch/v1/search',
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certificateFile),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
      },
      body: JSON.stringify(body),
      // body: body,
    }, (error, response, body) => {
      onSuccess(body);
      // console.log(response);
      // console.error(error);
    });


  }
}

module.exports = VisaService;



// const instance = axios.create({
//   baseURL: 'https://baseurl.com',
//   httpsAgent: new https.Agent({
//       ca: fs.readFileSync(`${path}CA.pem`),
//       cert: fs.readFileSync(`${path}CERT.pem`),
//       key: fs.readFileSync(`${path}KEY.pem`),
//       auth: 'user:password',
//       rejectUnauthorized: false
//   })
// });

// instance.get('/accounts')
// .then(_ => console.log(`response: ${_}`))
// .catch(err => console.log(`error: ${err.stack}`));




// var request = require('request');
// var req = request.defaults();
// var fs = require('fs');

// req.post({
//     uri : "https://sandbox.api.visa.com/…",
//     key: fs.readFileSync(keyFile),
//     cert: fs.readFileSync(certificateFile),
//     ca: fs.readFileSync(caFile)
//     headers: {
//       'Content-Type' : 'application/json',
//       'Accept' : 'application/json',
//       'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
//     },
//     body: data
//   }, function(error, response, body) {
//     …
//   }
// );
