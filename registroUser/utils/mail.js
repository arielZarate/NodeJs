const nodemailer = require("nodemailer");

//const send = async(to, subjectm, html, attachment) => {
/* send({
    to: "dileo.franco.@gmailj.com",
    subject: "Confirma Tu contraseña ",
    html: "<h3>Gracias por Registrarte en Nuestra App </h3> <b>Confirma Tu Coreo con este link --> </b> <a href:''>token_link </a>",
}); */

try {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "theodore.schiller50@ethereal.email",
            pass: "dMtT2ze5jyZ8fG2bX6",
        },
    });

    const email = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "arieltecnico@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    };

    // send mail with defined transport object
    const info = await transporter.sendMail({ email });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (error) {
    console.log(error);
}

//====================informacion obtenida desde "nodemailer npm"===========================================
/* const send = async(from, to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE, //dudo de esto
            auth: {
                user: process.env.CORREO_USER,
                password: process.env.CORREO_PASSWORD,
            },
            tls: {
                //tlc transport let  control
                rejectUnauthorized: false,
            },
        });

        const mail = {
            from,
            to,
            subject,
            html,
            //attachment:? ,
        };

        // esta es la operacion que envia todo, abre el socket paraenviar los email
        const recept = await transporter.sendMail(mail);
        console.log(recept.messageId);
        return recept.messageId;
    } catch (error) {}
};

module.exports = { send }; */

//=========NODEMAILER NPM ==============================