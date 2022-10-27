//CONTROLADORES DE LA APP

const service = require("../models/lenguajes");

const get = async(req, res) => {
    try {
        const result = await service.getLenguajes();
        console.log(result);

        res.send(result);
        return result;
    } catch (error) {
        res.sendStatus(500);
        res.send(error.message);
    }
};

const create = async(req, res) => {
    try {
        // console.log(req.body);
        const obj = req.body;
        const result = await service.createLenguajes(obj);
        res.send(result);
        return result;
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
};

const getById = async(req, res) => {
    try {
        const id = req.params;

        const result = await service.getLenguajesById(id);
        res.json(result);
        console.log(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
};
const updated = async(req, res) => {
    try {
        const id = req.params;
        const body = req.body;

        const result = await service.updateLenguajes(id, body);
        res.json(result);
        console.log(result);
        return result;
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
};

const deleted = async(req, res) => {
    try {
        const data = await service.deleteLenguajes(req.params);
        //res.send(data);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {get, create, getById, deleted, updated };