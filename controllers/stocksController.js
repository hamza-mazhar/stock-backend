const fs = require('fs').promises;
const { filterStockData } = require('../models/stocksModel');

const getStockData = async (req, res) => {
    const ticker = req.query.ticker.toUpperCase();
    const from = req.query.from || '';
    const to = req.query.to || '';

    if (!['GE', 'AMZN', 'AAPL', 'IBM'].includes(ticker)) {
        return res.status(400).json({ error: 'Invalid ticker symbol' });
    }

    try {
        const rawData = await fs.readFile(`data/${ticker}.json`, 'utf-8');
        const stockData = JSON.parse(rawData);
        const filteredData = filterStockData(stockData, from, to);
        res.json(filteredData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getStockData,
};
