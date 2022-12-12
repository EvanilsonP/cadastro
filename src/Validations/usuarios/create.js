const { validate, joi} = require('express-validator');

module.exports = validate({
    body: joi.object({
        nome: joi.string().required(),
        email: joi.string().email().required(),
        senha: joi.string().min().required()
    })
});