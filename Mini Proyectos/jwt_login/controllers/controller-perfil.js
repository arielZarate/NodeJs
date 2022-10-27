const getProfile = (req, res) => {
    console.log(req.body);
    console.log("eyy entraste 👮‍♂️👮‍♂️👮‍♂️👮‍♂️👮‍♂️");
    console.log("el id obtenido del usuario es " + req.id);
    res.json("welcomew  al la jungle 🚁🚁🚁🚁");
};

module.exports = { getProfile };