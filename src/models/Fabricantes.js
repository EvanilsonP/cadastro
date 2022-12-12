const db = require('../database');
const { DataTypes } = require('sequelize');

// Cria a estrutura/Model
const Fabricantes = db.define("Fabricantes", { // Nome do model, especificar quais colunas existem na tabela e configurar TABLENAME
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.INTEGER
    },

    createdAt: {
        type: DataTypes.DATE
    },

    updatedAt: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'fabricantes' // Especificar nome da tabela. Por padrão, o sequelize vai pensar que minha tabela se chama 'PRODUCTS'.
});

module.exports = Fabricantes;