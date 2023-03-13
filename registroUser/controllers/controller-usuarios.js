const service = require("../models/usuarios");

//esta funcioan confirma el correo
const confirmCorreo = (req, res) => {
    console.log(req.params.uuid);
    return service
        .update({
            obj: { habilitado: true },
            uidCorreo: req.params.uuid,
        })
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e.message));
};

/* 
const confirm=(req,res)=>
service
.update({  obj:{habilitado:true}  ,uidCorreo:req.params.uuid })
.then((r)=>res.json(r))
.catch((e)=>res.status(500).json(e));


*/
//devuelve todos los usuarios
/* const getAll = (req, res) => {
    return service
        .all(req.body)
        .then((r) => res.json(r))
        .catch((r) => res.status(500).json(e));
}; */
module.exports = { confirmCorreo };