const { Console } = require("console");
const fs = require("fs");
const idiomas = require("./src/idiomas");

function salida() {
  const exit = `${idiomas.espaniol()} ${idiomas.frances()}  ${idiomas.ingles()}`;
}

//console.log(salida());

console.log("============FS==============");
console.log("");

const sincronico = fs.readFileSync("./src/ingles.js", "utf-8");

console.log("===========archivos sincronicos:===========\n", sincronico);

const asincronico = fs.readFile("./src/frances.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);

  data;
});
console.log(asincronico);
