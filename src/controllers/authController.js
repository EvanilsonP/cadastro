const { Usuarios } = require('../models');
const bcrypt = require('bcryptjs');

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

        return res.json('Logado.');
    }
};

module.exports = authController;