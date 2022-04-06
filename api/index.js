const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const plants = require('./handlers/plants');

const api = express();

api.use(express.json());

api.get('/api/plant', plants.getAll);
api.get('/api/plant/:id', plants.getOneById);
api.post('/api/plant', plants.create);
api.put('/api/plant/:id', plants.update);
api.patch('/api/plant/:id', plants.updatePartial);
api.delete('/api/plant/:id', plants.remove);

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    return console.log(`Server running on port ${config.get('service').port}`)
});