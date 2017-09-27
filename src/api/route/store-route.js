/**
 * Created by user on 9/14/17.
 */
const express = require('express');
const router = express.Router();
let storeController = require('../controller/store-controller');

router.get('/', storeController.getStoreInfo);

router.get('/get-code', storeController.getCode);

module.exports = router;
