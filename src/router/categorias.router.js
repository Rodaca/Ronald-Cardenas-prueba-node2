const Categoria = require('../model/categoria.model');
const Producto = require('../model/producto.model');
const ProductosCategoria = require('../model/productos_categoria.model');

const router = require('express').Router();



router.get('/productos',  async(req, res)=>{
    const categorias = await Producto.findAll({
        include:{model:Tienda}
    })
    


    res.status(200).json({
        status:200,
        body:categorias

    })
})


module.exports = router;