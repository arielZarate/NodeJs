
const {SECRET_KEY}=process.env

/* 
NOTA: cada vez que se genera un token , este se genera con un el role , el user, el secret_key y un tiempo de expiracion

# si los datos son los mismos , se generara siempre el mismo token y ESO NO ES SEGURO
#RANDOMVALUE: le agrega un valor adicional random al secrete_key por lotanto siempre el user tendra un secret_key distinto

*/

//GENRADOR DE SECRET KEY



const CryptoJS = require("crypto-js");

const encrypt_secret = () => {
  const random = CryptoJS.lib.WordArray.random(16).toString();
  const encrypted_secret = CryptoJS.AES.encrypt(random, SECRET_KEY).toString();
  //console.log("clave encriptado en bd")

  return encrypted_secret;
};

const decrypt_secret = (encrypted_secret) => {
  const bytes = CryptoJS.AES.decrypt(encrypted_secret, SECRET_KEY);
  const decrypted_secret = bytes.toString(CryptoJS.enc.Utf8);

  console.log("clave desencriptado de bd")
  return decrypted_secret;
};

//exporto 
module.exports={encrypt_secret,decrypt_secret}