const express = require('express');
const router = express.Router();

const dateImageController = require('../controllers/getImageByDate');

router.get('/image', dateImageController.getImageByDate);

module.exports = router;
