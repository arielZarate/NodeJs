const db = require("../database/db");

//process.env.DB_TABLA
const getLenguajes = () => db("lenguajes").select("id", "nombre", "conectados");

const createLenguajes = (body) => db("lenguajes").insert(body);

const getLenguajesById = (id) =>
    db("lenguajes").where(id).select("id", "nombre", "conectados");

const deleteLenguajes = (id) => db("lenguajes").where(id).delete();
const updateLenguajes = (id, body) => db("lenguajes").where(id).update(body);

module.exports = {
    getLenguajes,
    createLenguajes,
    getLenguajesById,
    deleteLenguajes,
    updateLenguajes,
};