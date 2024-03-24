const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
    }
    next();
});

var stocks = require('./routes/stocksRoutes');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// register routes
app.use('/price', stocks);

app.listen(port, function () {
    console.log('app listening on port: '+ port);
});

module.exports = app;
