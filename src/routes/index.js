const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/ProdutoController');


routes.get('/produto/lista', produtoController.listarProduto);
routes.post('/produto/criar', produtoController.cadastrarProduto);


module.exports = routes;