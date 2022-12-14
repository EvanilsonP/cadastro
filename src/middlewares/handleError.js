const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("sequelize")

module.exports = (error, req, res) => {
    // Se o erro for do tipo Validation Error
    if(error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }

    if(error instanceof UnauthorizedError) {
        return res.status(error.status).json(error);
    }

    return res.status(500).json(error);
}