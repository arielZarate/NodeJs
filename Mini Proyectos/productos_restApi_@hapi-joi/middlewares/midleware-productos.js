const { schemas } = require("../models/schemas/schema-productos");

const validateCreate = (req, res, next) => {
    //acepta los parametros del req.body
    const { error, value } = schemas.create.validate(req.body);
    //si hay un error lo muestra sino continua con el next
    error ? res.status(422).json({ error: error.details[0].message }) : next();
};

const validateModify = (req, res, next) => {
    //acepta los parametros del req.body
    const { error, value } = schemas.modify.validate(req.body);
    //si hay un error lo muestra sino continua con el next
    error ? res.status(422).json({ error: error.details[0].message }) : next();
};
/* 
const validateModify = (req, res, next) => {
    try {
        const { error } = schemas.modify.validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");
        }
    } catch (error) {
        console.log({ error: message });
        res.status(422).json({ error: message });
    }
}; */

module.exports = { validateModify, validateCreate };