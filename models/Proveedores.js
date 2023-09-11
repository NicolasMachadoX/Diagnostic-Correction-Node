const { Schema, model } = require("mongoose");

const objSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    contacto:{
        type: String,
        require: [true, 'El contacto es requerido']
    },
    direccion:{
        type: Number,
        require: [true, 'La direccion es requerida']
    }}
);

module.exports = model('proveedores', objSchema);

