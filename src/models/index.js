// Camada de relacionamento entre Produtos e Fabricantes
const Produtos = require('./Produtos');
const Fabricantes = require('./Fabricantes');
const Categorias = require('./Categorias');
const CategoriaProduto = require('./CategoriaProduto');

// Produtos pertence a fabricante
Produtos.belongsTo(Fabricantes, {
    foreignKey: 'fabricante_id'
});

Fabricantes.hasMany(Produtos, {
    foreignKey: 'fabricante_id'
});

Produtos.belongsToMany(Categorias, {
    foreignKey: 'produto_id',
    through: CategoriaProduto // Espeficiar a tabela intermediária
});

Categorias.belongsToMany(Produtos, {
    foreignKey: 'produto_id',
    through: CategoriaProduto // Espeficiar a tabela intermediária
});


module.exports = { Produtos, Fabricantes, Categorias };