const { Usuarios } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const authController = {
    async login(req, res) {
        const { email, senha} = req.body;
        // Checando se há um email existente
        const usuario = await Usuarios.findOne({
            where: { email }
        });
        
        if(!usuario) {
            return res.status(400).json('Email não cadastrado.');
        }

        if(!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json('Senha inválida.');
        }
        // Gerando token
        const token = jwt.sign({id: usuario.id, email: usuario.email, nome: usuario.nome}, secret.key);
        return res.json(token);
    }
};

module.exports = authController;