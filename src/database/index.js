const Sequelize = require('sequelize');

const DB_NAME = "mydb";
const DB_USER = "root";
const DB_PASS = "88813091a";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}

// Objeto para guardar a conexão do banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.log('Erro ao tentar uma conexão com o banco de dados.');
}

async function hasConection() {
    try {
        await db.authenticate();
        console.log('Banco de dados conectado.');
    } catch (error) {
        console.log('Erro ao tentar conectar ao banco de dados.');
    }
}

// Adiciona algo ao objeto/metódo
Object.assign(db, { hasConection }); // A qual objeto eu quero adicionar e o que.

module.exports = db;