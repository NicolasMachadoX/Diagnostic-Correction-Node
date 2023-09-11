const { Schema, model } = require("mongoose");

const objSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    cargo:{
        type: String,
        require: [true, 'El cargo es requerida']
    },
    fechaContratacion:{
        type: Number,
        require: [true, 'La fecha es requerida']
    } }
);

module.exports = model('empleados', objSchema);

