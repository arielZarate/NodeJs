const express = require("express");
const router = express.Router;

var cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: "I'm a moooodule",
        e: "oO",
        T: "U ",
    })
);

function get_cows(error, cow_names) {
    if (error) {
        console.log(error);
    } else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}

cowsay.list(get_cows);

module.exports = { cowsay: cowsay };