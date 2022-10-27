Joi = require("@hapi/joi");

const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().min(2).max(45).required(),
        precio: Joi.number().positive().precision(2).min(0).max(1000000).required(),
        stock: Joi.number().positive().integer().min(1).max(1000000).required(),
    }),
    modify: Joi.object().keys({
        //NOTA: AL ID NO LO MANEJO YO , LO HACE LA MISMA BD POR LO TANTO NO DEBO VALIDAR NADA SOLO LO PASO POR EL PÀRAMS
        // id: Joi.number().integer().positive().required(),
        nombre: Joi.string().min(2).max(45).required(),
        precio: Joi.number().positive().precision(2).min(0).max(1000000).required(),
        stock: Joi.number().positive().integer().min(1).max(1000000).required(),
    }),
};

module.exports = { schemas };