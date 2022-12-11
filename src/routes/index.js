const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/ProdutoController');


routes.get('/produto/lista', produtoController.listarProduto);
routes.post('/produto/criar', produtoController.cadastrarProduto);
routes.delete('/produto/:id/deletar', produtoController.deletarProduto);
routes.put('/produto/:id/atualizar', produtoController.atualizarProduto);


module.exports = routes;