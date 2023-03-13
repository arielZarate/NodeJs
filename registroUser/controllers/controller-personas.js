const service = require("../models/personas");

//controladores

const all = (req, res) =>
    service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const single = async(req, res) => {
    try {
        const { id } = req.params;
        const [result] = await service.getSingle(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

const create = (req, res) =>
    service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

const modify = (req, res) =>
    service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
const deleted = (req, res) =>
    service
    .deleted({ id: req.params.id })
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

module.exports = { create, modify, all, single, deleted };