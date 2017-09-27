/**
 * Created by user on 9/21/17.
 */
/**
 * Created by user on 9/20/17.
 */
const express = require('express');
const router = express.Router();
let payloadController = require('../controller/payload-controller')
// /api/payload - get all payload
router.get('/', payloadController.getAllPayload);

module.exports = router;
