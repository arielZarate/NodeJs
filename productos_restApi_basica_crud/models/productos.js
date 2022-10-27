const db = require("../utils/db");

//este get sirve para todo
const get = (params = {}) =>
    db("productos").where(params).select("id", "nombre", "precio");

const create = (obj) => db("productos").insert(obj);

const update = (obj, params = {}) => db("productos").where(params).update(obj);
const deleted = (params = {}) => db("productos").where(params).delete();
//============================================================
module.exports = {get, create, update, deleted };