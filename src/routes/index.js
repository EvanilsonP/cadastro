const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/ProdutoController');


routes.get('/produtos', produtoController.listarProduto);
routes.post('/produtos', produtoController.cadastrarProduto);
routes.delete('/produto/:id', produtoController.deletarProduto);
routes.put('/produto/:id', produtoController.atualizarProduto);


module.exports = routes;