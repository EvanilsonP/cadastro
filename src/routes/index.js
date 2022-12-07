const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/ProdutoController');


routes.get('/produto/lista', produtoController.listarProduto);
routes.post('/produto', produtoController.cadastrarProduto);


module.exports = routes;