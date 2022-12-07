const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

routes.get('/produto/:id?', (req, res) => {
    console.log(req.params);
    res.send('Olá');
});

routes.post('/cadastrar', (req, res) => {
    res.json(req.body);
});

module.exports = routes;