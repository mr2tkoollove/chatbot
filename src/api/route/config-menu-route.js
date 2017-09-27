
/**
 * Created by user on 9/25/17.
 */
const express = require('express');
const router = express.Router();
let configMenu = require('../controller/config-menu-controller');

router.post('/setStartedText', configMenu.setStartedText);
router.post('/setMainMenu', configMenu.setMainMenu);
router.post('/setPersistentMenu', configMenu.setPersistentMenu);

module.exports = router;
