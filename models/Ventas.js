/* const { Schema, model } = require("mongoose");

const objSchema = Schema({
    fechaVenta:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    paciente:{
        type: Number,
        require: [true, 'La direccion es requerida']
    },
    medicamentosVendidos:{
        type: Object,
        require: [true, 'El telefono es requerido']
    }}
);

module.exports = model('ventas', objSchema);

 */

const { ObjectId } = require('mongodb');
const { client } = require('../database/config.js');

class UsuarioModel {
  static async obtenerTodos() {
    const db = client.db(dbName);
    const usuarios = await db.collection('usuarios').find().toArray();
    return usuarios;
  }

  static async obtenerPorId(id) {
    const db = client.db(dbName);
    const usuario = await db.collection('usuarios').findOne({ _id: ObjectId(id) });
    return usuario;
  }

  // Otros métodos de modelo aquí...
}

module.exports = UsuarioModel;