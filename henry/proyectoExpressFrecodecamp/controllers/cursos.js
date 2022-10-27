//const { bd } = require("../bd/cursos");
const bd = require("../bd/cursos");

const getMessage = (req, res) => {
  res.send("welcome a los cursos de programacion  🚀🚀🚀🚀🚀");
  console.log(bd.programacion);
};

const cursos = (req, res) => {
  // res.json(bd);
  res.send(JSON.stringify(bd));
};
const matematicas = (req, res) => {
  // res.json(bd);
  res.send(JSON.stringify(bd.matematicas));
};
const programacion = (req, res) => {
  // res.json(bd);
  res.send(JSON.stringify(bd.programacion));
};

//FILTRANDO POR QUERY
const lenguaje = (req, res) => {
  // res.json(bd);

  const lenguaje = req.params.lenguaje;

  //res.send(JSON.stringify(lenguaje)); no sirve devuelve el primero

  //el filter devuelve todos los objetos que encuentra
  // el find devuelve el primero que encuentra
  const resultado = bd.programacion.filter((obj) => obj.lenguaje === lenguaje);

  if (resultado === 0) {
    res
      .status(404)
      .send(`no se encontraron lenguajes de programacion ${lenguaje}`);
  }
  res.status(200).json(resultado);

  //res.send("Culiaaa");
  //res.end();
  //res.send(JSON.stringify(bd.programacion));
};

//matematicas
const matematica = (req, res) => {
  const tema = req.params.tema;

  const resultado = bd.matematicas.filter(
    (obj) => obj.tema === req.params.tema
  );

  if (resultado === 0) {
    res.status(404).send(`no se encontraron estos  ${tema} de matematicas`);
  }
  res.status(200).json(resultado);
};

//funcion generica
const generico = (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultado = bd.programacion.filter(
    (obj) => obj.lenguaje === lenguaje && obj.nivel === nivel
  );

  if (resultado === 0) {
    res
      .status(404)
      .send(`no se encontraron estos ${lenguaje} ni estos ${nivel} `);
  }
  res.status(200).json(resultado);
};

module.exports = {
  getMessage,
  cursos,
  matematicas,
  programacion,
  lenguaje,
  matematica,
  generico,
};
