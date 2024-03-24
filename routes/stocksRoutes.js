const express = require('express');
const router = express.Router();
const { getStockData } = require('../controllers/stocksController');

router.get('/', getStockData);

module.exports = router;
