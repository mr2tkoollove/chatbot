const express = require('express');
const router = express.Router();
let commonController = require('../controller/common-controller');

router.get('/auth', commonController.getAuth);

module.exports = router;
