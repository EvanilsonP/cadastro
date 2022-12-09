const db = require('../database');
const { DataTypes } = require('sequelize');

// Cria a estrutura/Model
const Produtos = db.define("Produtos", { // Nome do model, especificar quais colunas existem na tabela e configurar TABLENAME
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.INTEGER
    },

    preco: {
        type: DataTypes.FLOAT
    },

    quantidade: {
        type: DataTypes.INTEGER
    },

    createdAt: {
        type: DataTypes.DATE
    },

    updatedAt: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'produtos' // Especificar nome da tabela. Por padrão, o sequelize vai pensar que minha tabela se chama 'PRODUCTS'.
});

module.exports = Produtos;