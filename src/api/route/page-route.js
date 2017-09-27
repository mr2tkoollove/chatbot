/**
 * Created by user on 9/20/17.
 */
const express = require('express');
const router = express.Router();
let pageController = require('../controller/page-controller');

// api/page
//create page in store
router.post('/', pageController.createPage);

//get page by id
router.get('/:id', pageController.getPageById);

// clear current page in store
router.post('/clearCurrentPage', pageController.clearCurrentPage);

module.exports = router;
