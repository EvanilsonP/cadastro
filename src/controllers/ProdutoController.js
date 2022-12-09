const Produtos = require('../models/Produtos');

produtoController = {
    async listarProduto(req, res) {
        const listaDeProdutos = await Produtos.findAll()
        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, preco, quantidade } = req.body;

        // Partes da coluna que quero preencher
        const novoProduto = await Produtos.create({
            nome, preco, quantidade
        });
        res.json(novoProduto);
    }
};

module.exports = produtoController;