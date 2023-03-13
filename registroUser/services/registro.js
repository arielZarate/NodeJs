const bd = require("../utils/bd");
const { v4: uuid } = require("uuid");
const sha1 = require("sha1");

//==================NODEMAILER==============================================
//const { send } = require("../utils/mail");

const create = async(obj) => {
    try {
        //transformo a un objeto
        const { nombre, apellido, correo } = obj;
        const persona = { nombre, apellido, correo };

        // console.log(persona);

        const [idP] = await bd("personas").insert(persona); // [4]

        const { usuario, password } = obj;

        //pass_aux = sha1(password);
        // uid = uuid();

        //creamos un objeto user
        const user = {
            //asigno el valor de el id generado al objeto idPersonas
            id_persona: idP,
            usuario,
            password: sha1(password),
            uidCorreo: uuid(),
        };

        console.log(user);
        const [idUsuario] = await bd("usuarios").insert(user);
        console.log(idUsuario);

        // return idUsuario;

        console.log("send email.... await !!");
        //return idUsuario;

        // console.log(idUsuario);

        // envie un mail

        /*    const messageId = send({
                            from: "arieltecnico@gmail.com",
                            to: correo,
                            subject: "Gracias por registrarte",
                            html: "<b>Hello world?</b>",
                        }); */

        return messageId;

        //retorno el messageId que se genero
    } catch (e) {
        console.log(e);
    }
};

//fin de nodemaileer

module.exports = { create };