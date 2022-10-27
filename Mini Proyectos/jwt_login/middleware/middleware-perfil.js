const fs = require("fs");
const publickey = fs.readFileSync("keys/public.pem");
const jwt = require("jsonwebtoken");
const secured = (req, res, next) => {
    try {
        // Bearer:  jwt
        // req.headers.authorization
        const { authorization } = req.headers;
        const { id } = jwt.verify(authorization, publickey); // { id: user.id }
        //creo una propiedad id dentro del request y le asigno el id obtenido de la desecncriptacion

        req.id = id;
        next();
        //el catch representa un 401
    } catch (e) {
        console.log(e);
        res.sendStatus(401);
    }
};

module.exports = { secured };