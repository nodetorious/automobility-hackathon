const https = require('https');
const request = require('request');
const req = request.defaults();
const fs = require('fs');
const path = require('path');
require('dotenv').config();


class MerchantOfferService {
    static dataByMerchant(onSuccess) {
        const keyFile = path.join(__dirname, '..', '..', 'secrets', 'keylala.pem');
        const certificateFile = path.join(__dirname, '..', '..', 'secrets', 'falala.pem');
        const userId = process.env.VISA_USERID;
        const password = process.env.VISA_PASSWORD;

        return req.get({
            uri: 'https://sandbox.api.visa.com/vmorc/data/v1/merchant',
            key: fs.readFileSync(keyFile),
            cert: fs.readFileSync(certificateFile),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
            },
            body: JSON.stringify(body),
        }, (error, response, body) => {
            onSuccess(body)
        })
    }

    static getAllOffers(onSuccess) {
        const keyFile = path.join(__dirname, '..', '..', 'secrets', 'key_8f8104b5-b24a-4007-9f88-a0797d1d8ce7.pem');
        const certificateFile = path.join(__dirname, '..', '..', 'secrets', 'cert.pem');
        const userId = process.env.VISA_USERID;
        const password = process.env.VISA_PASSWORD;

        return req.get({
            uri: 'https://sandbox.api.visa.com/vmorc/offers/v1/all',
            key: fs.readFileSync(keyFile),
            cert: fs.readFileSync(certificateFile),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
            },
            body: JSON.stringify(body),

        }, (error, response, body) => {
            onSuccess(body)
        })
    }

    // return req.
}
module.exports = MerchantOfferService