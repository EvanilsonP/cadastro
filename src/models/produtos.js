const db = require('../database');
const { DataTypes } = require('sequelize');
const Fabricantes = require('./Fabricantes.js');

// Cria a estrutura/Model
const Produtos = db.define("Produtos", { // Nome do model, especificar quais colunas existem na tabela e configurar TABLENAME
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING
    },

    preco: {
        type: DataTypes.FLOAT
    },

    quantidade: {
        type: DataTypes.INTEGER
    },
    // Dizer onde a FK faz referência
    // recebe o modelo que vai fazer referência e a FK
    fabricante_id: {
        type: DataTypes.INTEGER,
        references: {  
            model: Fabricantes,
            key: 'id'           // Chave de referência de Fabricantes
        }
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