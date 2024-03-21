const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  name: { type: String },
  color: { type: String },
  peso: { type: Number },
  age: {
    type: Number,
    min: 0,
    max: 20,
  },
  description: { type: String },
});

// Crear el modelo
const Mascota = mongoose.model("Mascota", mascotaSchema);

module.exports = Mascota;
