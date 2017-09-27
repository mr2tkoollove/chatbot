const express = require('express');
const http = require('http');
const path = require('path');

const api = require('./src/api/route/common-route');
const store = require('./src/api/route/store-route');
const account = require('./src/api/route/account-route');
const page = require('./src/api/route/page-route');
const payload = require('./src/api/route/payload-route');
const menu = require('./src/api/route/config-menu-route');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

//api
app.use('/api', api);
app.use('/api/store', store);
app.use('/api/account', account);
app.use('/api/page', page);
app.use('/api/payload', payload);
app.use('/api/menu', menu);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(function (err, req, res, next) {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
        if (err.code === 'invalid_token') {
            if (err.inner.name === 'JsonWebTokenError') {
                res.status(401).send({ code: 1 });
                return;
            }
            else if (err.inner.name === 'TokenExpiredError') {
                res.status(401).send({ code: 2 });
                return;
            }
        }
    }
    res.status(500).send({ code: 0 });
    return;
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
