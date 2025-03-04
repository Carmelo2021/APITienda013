const mongoose = require("../config/connection");

  // los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
  const schemaProducto = new mongoose.Schema({
     referencia: {
        type: Number,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
  },{versionKey:false});

  const producto = mongoose.model("producto", schemaProducto);
  module.exports = producto;