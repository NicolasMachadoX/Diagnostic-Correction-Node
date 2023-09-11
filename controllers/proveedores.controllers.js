const Proveedores = require('../models/Proveedores.js');

 const proveedoresMedicamentos = async (req,res)=>{
    try {
        const data = await Proveedores.find();

        res.json(data);
    } catch (error) {
        res.status(404).json({
            'message':'Ha ocurrido un error'
        })
    }


}

module.exports = {
    proveedoresMedicamentos    
}