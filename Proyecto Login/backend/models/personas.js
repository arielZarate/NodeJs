const bd = require("../utils/bd");

/* const get = () =>
    bd("personas").select("nombre", "correo", "usuario", "password"); */

//otro opcion donde usamos el get con params opcional
const get = (params = {}) =>
    bd("personas")
    .where(params)
    //.andwhere({ habilitado: 1 })
    .select("nombre", "correo", "usuario", "password");

const create = (obj) => bd("personas").insert(obj);
/* const update = (obj, params) => bd("personas").where(params).update(obj); */

const update = (obj, params) => bd("personas").where(params).update(obj);

///ldhjadslkñ
const delet = (params) => bd("personas").where(params).delete();
module.exports = {get, create, update, delet };

/* const registro = [
    { id: 1, cliente: "Ariel Zarate", age: "35" },
    { id: 2, cliente: "jose Zaragosa", age: "65" },
    { id: 3, cliente: "Martin de los Andes", age: "21" },
    { id: 4, cliente: "Maria Casanova", age: "74" },
]; */