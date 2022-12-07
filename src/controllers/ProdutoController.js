produtoController = {
    listarProduto: (req, res) => {
        res.json([{ nome: 'Produto 1'}, { nome: 'Produto 2'}])
    },

    cadastrarProduto: (req, res) => {
        res.send('Produto cadastrado!');
    }
};

module.exports = produtoController;