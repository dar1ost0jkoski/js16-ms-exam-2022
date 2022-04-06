const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const plants = require();

const api = express();

api.use(express.json());

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    return console.log(`Server running on port ${config.get('service').port}`)
})