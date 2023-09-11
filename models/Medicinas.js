const { Schema, model } = require("mongoose");

const medicinaSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    precio:{
        type: Number,
        require: [true, 'El precio es requerido']
    },
    stock:{
        type: Number,
        require: [true, 'El stock es requerido']
    },
    fechaExpiracion:{
        type: Number,
        require: [true, 'Fecha de expricacion requerida']
    },
    proveedor:{
        type: Object,
        require: [true, 'El proveedor es requerido']
    }
});

module.exports = model('Medicamentos', medicinaSchema);

