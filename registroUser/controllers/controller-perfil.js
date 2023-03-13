const e = require("express");
const express = require("express");
const router = express.Router();

service = require("../models/usuarios");

const getProfile = async(req, res) => {
    //console.log(req.body);

    try {
        const data = await service.getById(req.id);
        res.json(data);
        return data;
    } catch (error) {
        res.error.message;
    }

    /*   console.log("eyy entraste 👮‍♂️👮‍♂️👮‍♂️👮‍♂️👮‍♂️");
                              console.log("el id obtenido del usuario es " + req.id);
                              res.json("welcomew  al la jungle 🚁🚁🚁🚁"); */
};

module.exports = { getProfile };