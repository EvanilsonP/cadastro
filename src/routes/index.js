const express = require('express');
const routes = express.Router();
const requestLog = require('../middlewares/requestLog');
const block = require('../middlewares/block');
const produtoController = require('../controllers/ProdutoController');
const usuarioController = require('../controllers/UsuarioController');
const usuarioCreateValidation = require('../Validations/usuarios/create');


routes.get('/produtos', requestLog, block, produtoController.listarProduto);
routes.post('/produtos', produtoController.cadastrarProduto);
routes.delete('/produto/:id', produtoController.deletarProduto);
routes.put('/produto/:id', produtoController.atualizarProduto);

routes.post('/usuarios', usuarioCreateValidation, usuarioController.registro);


module.exports = routes;