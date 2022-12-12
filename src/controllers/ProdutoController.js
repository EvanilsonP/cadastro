const { Produtos, Fabricantes } = require('../models');

produtoController = {
    async listarProduto(req, res) {
        const listaDeProdutos = await Produtos.findAll({
            include: Fabricantes
        });
        
        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, preco, quantidade, fabricante_id } = req.body;

        // Partes da coluna que quero preencher
        const novoProduto = await Produtos.create({
            nome, preco, quantidade, fabricante_id
        });
        res.json(novoProduto);
    },

    async deletarProduto(req, res) {
        const { id } = req.params;
        await Produtos.destroy({
            where: {
                id
            }
        });

        res.json('Produto deletado.');
    },

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, quantidade} = req.body;
        const ProdutoAtualizado = await Produtos.update({
            nome, preco, quantidade
        }, {
            where: {
                id
            }
        });

        res.json(ProdutoAtualizado);
    }
};

module.exports = produtoController;