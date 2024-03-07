const express = require('express');
const productoRouter =  require('../router/productos.router');
const productosMasVendidosRouter=require('../router/productosMasVendidos.router')
const categoriasRouter=require('../router/categorias.router')

const app = express();

app.get('/', (req, res) => {
  res.send('Api express server');
});

app.use(express.json());
app.use("/api/", productoRouter);
app.use("/api/", productosMasVendidosRouter);
app.use("/api/", categoriasRouter)


module.exports = app;