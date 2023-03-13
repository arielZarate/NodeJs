const { imgFile } = require("../utils/fileHandler");
const services = require("../models/productos");

const createProducto = async(body, files) => {
    try {
        const [idProducto] = await services.create(body);
        const uid = imgFile(files);
        const obj = {
            idProducto,
            uid,
        };

        const idImagen = services.createImages(obj); // [10]

        return idImagen;
    } catch (e) {
        throw e;
    }
    // insertar en la tabla docente_imagenes el obj
};

module.exports = { createProducto };