const { Schema, model } = require("mongoose");

const objSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    direccion:{
        type: Number,
        require: [true, 'La direccion es requerida']
    },
    telefono:{
        type: Number,
        require: [true, 'El telefono es requerido']
    } }
);

module.exports = model('pacientes', objSchema);

