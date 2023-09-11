const Medicinas = require('../models/Medicinas.js');

 const getMedicinasStock50 = async (req,res)=>{
    try {
        const data = await Medicinas.find();
        const dataFil = data.filter((data)=>data.stock < 50);

        res.json(dataFil);
    } catch (error) {
        res.status(404).json({
            'message':'Ha ocurrido un error'
        })
    }


}

const getMedicamentoCaro = async (req,res)=>{
    try {
        const data = await Medicinas.find(); 
        const dataArray = []
        
        /* for(let i = 0; i < data.length ; i++){
            dataArray.push(data[i].precio)
            let dataMax = Math.max(...dataArray);
            
            const dataFinal = await Medicinas.find({precio: dataMax})

            if(i == data.length){
                console.log(dataFinal);
            }
           
        } */
       
        res.send(dataFinal)

    } catch (error) {
        res.status(404).json({
            'message':'Ha ocurrido un error'
        })
    }
}

const getMedicinasProvA = async (req,res)=>{
    try {
        const data = await Medicinas.find();
        const dataFil = data.filter((data)=> data.proveedor.nombre == "ProveedorA");
        res.json(dataFil);
    } catch (error) {
        res.status(404).json({
            'message':'Ha ocurrido un error'
        })
    }


}


module.exports = {
    getMedicinasStock50,
    getMedicinasProvA,  
    getMedicamentoCaro    
}