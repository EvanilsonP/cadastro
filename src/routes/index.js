const express = require('express');
const routes = express.Router();
const requestLog = require('../middlewares/requestLog');
const block = require('../middlewares/block');
const produtoController = require('../controllers/ProdutoController');


routes.get('/produtos', requestLog, block, produtoController.listarProduto);
routes.post('/produtos', produtoController.cadastrarProduto);
routes.delete('/produto/:id', produtoController.deletarProduto);
routes.put('/produto/:id', produtoController.atualizarProduto);


module.exports = routes;