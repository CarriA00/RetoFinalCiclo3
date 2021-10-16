import express from 'express'
const router = express.Router();

//importar el modelo de Temperatura

import Tempe from '../models/tempe';

// Agregar una Temperatura

router.post('/nueva-tempe', async(req, res)=>{

const body = req.body;
try {

    const tempeDB= await Tempe.create(body);
    res.status(200).json(tempeDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
    })
    
}


});

//Get con parametro

router.get('/tempe/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const tempeDb= await Tempe.findOne({_id});
        res.json(tempeDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



});

//Get con todos los documentos

router.get('/tempe',async(req,res)=>{

    try {

        const tempeDb=await Tempe.find();
        res.json(tempeDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Delete eliminar una temperatura

router.delete('/tempe/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const tempeDb=await Tempe.findByIdAndDelete({_id});
        if(!tempeDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(tempeDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar una temperatura

router.put('/tempe/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const tempeDb= await Tempe.findByIdAndUpdate(_id,body,{new:true});
        res.json(tempeDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }

});
//Get Por Ciudad

router.get('/ciudad/:nombre', async(req, res)=>{

     const nombre=req.params.nombre;

    try {

        //const tempeDb= await Tempe.findOne({nombre});
        const tempeDb=await Tempe.find();
        res.json(tempeDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

//Exportacion de router
module.exports=router;