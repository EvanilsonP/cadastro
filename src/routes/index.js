const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

routes.post('/cadastrar', (req, res) => {
    res.json(req.body);
});

module.exports = routes;