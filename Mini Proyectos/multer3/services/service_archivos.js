const { v4: uuid } = require("uuid");
const fs = require("fs");

const ImageExtension = ["jpg", "jpeg", "gif", "png"];

const FileUpload = ({ mimetype, path, size },
    allowExtension, { destFolder } = "public/images"
) => {
    try {
        const { tipo, extension } = mimetype.split("/");
        if (!allowExtension.includes(extension)) {
            throw "Error: Formato no permitido";
        }

        const uid = uuid();
        const fileName = `${uid}.${extension}`;
        const fileNameOut = `${destFolder}/${fileName}`;

        //fs file system
        //leo y escribo el archivo
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));

        fs.unlink(path, (e) => {
            if (e) throw "No se ha podido borrar el archivo temporal";
        });

        return uid;
    } catch (error) {
        throw error;
    }
};

const ImageFile = (file) => {
    return FileUpload(file, ImageExtension);
};

module.exports = { ImageFile };