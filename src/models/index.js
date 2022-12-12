// Camada de relacionamento entre Produtos e Fabricantes
const Produtos = require('./Produtos');
const Fabricantes = require('./Fabricantes');

// Produtos pertence a fabricante
Produtos.belongsTo(Fabricantes, {
    foreignKey: 'fabricante_id'
});

Fabricantes.hasMany(Produtos, {
    foreignKey: 'fabricante_id'
});

module.exports = { Produtos, Fabricantes };