'use-trict';

const express = require('express');
const router = express.Router();
const accountController = require('../controller/account-controller');


// api/account/HandleResponse
router.get('/HandleResponse', accountController.handleResponse);

//get info account
router.post('/', accountController.getInfoAccount);
module.exports = router;
