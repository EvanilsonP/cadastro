const { Produtos, Fabricantes, Categorias } = require('../models');
const Categorias = require('../models/Categorias');

produtoController = {
    async listarProduto(req, res) {
        const listaDeProdutos = await Produtos.findAll({
            include: Fabricantes, Categorias
        });

        res.json(listaDeProdutos);
    },

    async cadastrarProduto(req, res) {
        console.log(req.user);
        const { nome, preco, quantidade, fabricante_id, categorias_id } = req.body;

        // Partes da coluna que quero preencher
        const novoProduto = await Produtos.create({
            nome, preco, quantidade, fabricante_id
        });

        const categoria = await Categorias.findByPk(categorias_id);
        await novoProduto.setCategorias(categoria);

        res.status(201).json(novoProduto);
    },

    async deletarProduto(req, res) {
        try {
            
        
        const { id } = req.params;
        await Produtos.destroy({
            where: {
                id
            }
        });

        res.status(204);
        } catch (error) {
            res.status(500).json('Ocorreu algum problema.');
        }
    },

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, quantidade} = req.body;

        if(!id) return res.status(400).json('ID não enviado.');

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