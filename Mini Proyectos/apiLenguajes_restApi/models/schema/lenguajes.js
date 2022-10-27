//==========SCHEMA====================
const Joi = require("joi");

const schemas = {
    create: Joi.object({
        nombre: Joi.string().min(1).max(20).required(),
        conectados: Joi.number().positive().required(),
    }),
    modify: Joi.object({
        //NOTA: AL ID NO LO MANEJO YO , LO HACE LA MISMA BD POR LO TANTO NO DEBO VALIDAR NADA SOLO LO PASO POR EL PÀRAMS
        // id: Joi.number().integer().positive().required(),
        nombre: Joi.string().min(1).max(20).required(),
        conectados: Joi.number().positive().required(),
    }),
};

module.exports = { schemas };