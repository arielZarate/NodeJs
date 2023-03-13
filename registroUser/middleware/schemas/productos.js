const Joi = require("@hapi/joi");
// nombre,apellido,mail, telefono, usuario,password
const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().min(4).max(60).required(),
        marca: Joi.string().min(2).max(45).required(),
        precio: Joi.number().positive().required(),
        stock: Joi.number().optional(),
    }),
};

module.exports = { schemas };