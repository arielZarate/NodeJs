const axios = require("axios");

const express = require("express");
const router = express.Router();

const url = "https://rickandmortyapi.com/api/character";

const Get = (req, res) => {
  return axios
    .get(url)
    .then((r) => console.log(r.data.results))
    .catch((e) => res.json(e.data.results));

  //console.log(data.results);
  //return data;
};

router.get("/", Get);

module.exports = router;
