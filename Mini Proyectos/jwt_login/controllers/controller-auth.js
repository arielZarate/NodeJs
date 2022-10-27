const service = require("../models/auth");

//===========================JSONWEBTOKEN===========================================
const fs = require("fs"); //file system
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync("./keys/private.pem");
const sha1 = require("sha1");

// npmjs.com
const signOptions = { algorithm: "RS256", expiresIn: "2h" };
const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);
//=========================================================================
const auth = async(req, res) => {
    try {
        const { usuario, password } = req.body;

        // console.log(usuario, password);
        //console.log(sha1(password));
        const [user] = await service.authenticate(usuario, sha1(password));

        console.log(user); // if (!user) res.sendStatus(401);
        if (!user)
            res.status(401).json({
                401: "Unauthorized",
                message: " Debe validar los datos ingresados usuario/password",
            });

        if (!user.habilitado)
        /* console.log("desabilitado"); */
            res.status(401).json({ message: "Confirmar tu cuenta tu correo 🛺🛺🛺" });

        if (user.habilitado) {
            //aca llamop a la creacion del token
            //role: "user"
            const token = createToken({ id: user.id }); // sql
            console.log("habilitado");
            console.log(token);

            /*  NOTA: en el token guardamos informacion oculta al usuario que sirve al servidro*/

            res.json({ JWT: token, info: { usuario } });

            // console.log(user);
        }
    } catch (e) {
        console.log(e);
        //un res,status y un res.send juntos
        res.sendStatus(500);
    }
};

module.exports = { auth };