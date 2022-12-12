const { validate, joi} = require('express-validator');

module.exports = validate({
    body: joi.object({
        email: joi.string().email().required(),
        senha: joi.string().required()
    })
});