const exp = require('express');
const router = exp.Router();
const modeloProducto = require('../src/models/producto.model')

router.get('/productos',  async (req,res)=>{
    let resultado = await modeloProducto.find({});
    console.log(resultado);
    if(resultado){
        res.json(resultado);
    }else{
        res.json({"mensaje": "hubo un error"});
    }    
});

module.exports = router;