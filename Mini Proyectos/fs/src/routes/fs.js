const express = require("express");
const app = express();
const fs = require("fs");

//
//====FUENTE=====
//https: //www-tutorialsteacher-com.translate.goog/nodejs/nodejs-file-system?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es-419&_x_tr_pto=sc

//=====LEER=================
/* 
    Descripción de parámetros:
    filename: ruta completa y nombre del archivo como una cadena.
    opciones: el parámetro de opciones puede ser un objeto o una cadena que puede incluir codificación y marca. La codificación predeterminada es utf8 y el indicador predeterminado es "r".
    devolución de llamada: una función con dos parámetros err y fd. Se llamará a esto cuando se complete la operación readFile.

    */

const leerAsincronico = () =>
    fs.readFile("src/archivo.txt", (err, buffer) => {
        if (err) throw err;
        //En caso de no error
        console.log(buffer);
    });

const leerSincronico = () => {
    var data = fs.readFileSync("src/archivo.txt", "utf8");
    console.log(data);
};

/* 
========================CREAR ARCHIVO=========================================================    
fs.writeFile(filename, data[, options], callback)

////////////////////////////////////////////////////
Descripción de parámetros:

filename: ruta completa y nombre del archivo como una cadena.

Datos: El contenido que se va a escribir en un archivo.

opciones: el parámetro de opciones puede ser un objeto o una cadena 
que puede incluir codificación, modo y bandera. La codificación predeterminada 
es utf8 y el indicador predeterminado es "r".

devolución de llamada: una función con dos parámetros err y fd. Esto se llamará cuando se complete la operación de escritura.
    
    */

const crearArchivo = () => {
    fs.writeFile("src/test.txt", "Hello World!", function(err) {
        if (err) console.log(err);
        else console.log("Operacion de escritura terminada.");
    });
};

////===========AGREGAR AL ARCHIVO=====================

const agregar = () => {
    fs.appendFile("src/test.txt", "estamos agregando archivos", function(err) {
        if (err) console.log(err);
        else console.log("Append operation complete.");
    });
};

//========ABRIR ARCHIVOS CON PERMISOS=============
/* 
Descripción de parámetros:

ruta: ruta completa con el nombre del archivo como una cadena.
Bandera: La bandera para realizar la operación => r/w/x
Modo: el modo de lectura, escritura o lectura y escritura.
El valor predeterminado es 0666 de lectura y escritura.
devolución de llamada: una función con dos parámetros err y fd. 
Esto se llamará cuando se complete la operación de apertura de archivos

*/
const abrir = () => {
    //=============ruta       bandera  funcion anonima
    fs.open("src/archivo.txt", "r", function(err, fd) {
        if (err) {
            return console.error(err);
        }

        var buffr = new Buffer.alloc(1024); //tamaño de 1mb
        console.log(fd);

        //  lee el fd=informacion del archivo , con el tamaño de buffer
        // hasta donde va leer(length) , desde donde empieza y el callback
        fs.read(fd, buffr, 0, buffr.length, 0, function(err, bytes) {
            if (err) throw err;

            // si la cantidad de bytes es > a 0 , es decir existen datos
            if (bytes > 0) {
                console.log(
                    " Repuesta del buffer slice(): " + buffr.slice(0, bytes).toString()
                );
            }

            // luego cierra elarchivo abierto
            fs.close(fd, function(err) {
                if (err) throw err;
            });
        });
    });
};

//========BORRAR ARCHIVOS======================

const borrar = () => {
    var fs = require("fs");

    fs.unlink("src/test.txt", function() {
        console.log("Operacion completada");
    });
};

//=============ROUTES==============================
app.get("/leer1", leerAsincronico);
app.get("/leer2", leerSincronico);
app.get("/crear", crearArchivo);
app.get("/agregar", agregar);
app.get("/abrir", abrir);
app.get("/borrar", borrar);

module.exports = app;