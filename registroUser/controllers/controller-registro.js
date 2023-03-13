const service = require("../services/registro");
const create = (req, res) => {
    //console.log(obj)

    let obj = req.body;
    return service
        .create(obj)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e));
};
module.exports = { create };