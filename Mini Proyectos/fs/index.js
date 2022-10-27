const express = require("express");
const app = express();
const port = 3000;

const fs = require("./src/routes/fs");

//src\archivo.txt
app.use("/archivos", fs);

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Escuchando en el puerto: ${port}!`));