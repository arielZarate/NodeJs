const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/* 
// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

*/

// create reusable transporter object using the default SMTP transport

//===============USANDO UNA CUENTA DE ETHEREAL TESTING==================
const transporter = nodemailer.createTransport({
    /*    host: "smtp.ethereal.email",
                                        port: 587,
                                        secure: false,
                                        auth: {
                                            user: "felix.daugherty8@ethereal.email",
                                            pass: "Y9CJTS3ynWvV8qp89d",
                                        }, */
    service: "gmail",
    auth: {
        user: "arieltecnico@gmail.com",
        pass: "2pac2021!",
    },

    //NO OLVIDAR LOS TLS
    tls: {
        rejectUnauthorized: false,
    },
});

//============ mailOptions=======================

const mailOptions = {
    from: "arieltecnico@gmail.com",
    to: "arielpruebaback@gmail.com",
    subject: "Enviendo desde Nodemailer",
    html: `<b>Hola</b>`,
};

const send = (req, res) => {
    // console.log("email enviado ...");
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email Enviado....");
            res.status(200).jsonp(req.body);
            console.log(info.messageId);
            return info.messageId;
        }
    });
};
/* const send = (req, res) => {
    // console.log("email enviado ...");
 transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email Enviado....");
            res.status(200).jsonp(req.body);
            console.log(info.messageId);
            return info.messageId;
        }
    });
}; */

//=====es un POST=========
router.post("/send", send);
module.exports = router;