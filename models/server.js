const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config.js');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();


        this.medicamentos = "/api/medicamentos";
        this.proveedores = "/api/proveedores";
        this.empleados = "/api/empleados";
        this.pacientes = "/api pacientes";
        this.ventas = "/api/ventas" ;
        this.compras = "/api/compras" ;
        this.routes();

       
    
        this.connectDB();
    
    
    }
    async connectDB(){
        await dbConnection();

    }

   
    middlewares(){

        this.app.use(cors());
        this.app.use(express.json());

    }
    routes(){
        this.app.use(this.medicamentos, require('../routes/medicamentos.routes.js'));
        this.app.use(this.proveedores, require('../routes/proveedores.routes.js'))
        this.app.use(this.ventas, require('../routes/ventas.routes.js'))
        this.app.use(this.pacientes, require('../routes/pacientes.routes.js'))
        this.app.use(this.empleados, require('../routes/empleados.routes.js'))
        this.app.use(this.compras, require('../routes/compras.routes.js'))
    }

    listen(){

        this.app.listen(this.port, ()=>{
            console.log(`Server Running on port: ${this.port}`);

        })

    }

}

module.exports = Server