const express = require('express');
const routers = express.Router();

const produtoController = require ('../controllers/produtoController');

/*CRUD*/

routers.post('/produtos', produtoController.insert);

routers.get('/produtos', produtoController.select);

routers.get('/produtos/:id', produtoController.buscaPorId);

routers.put('/produtos/:id', produtoController.update);

routers.delete('/produtos/:id', produtoController.delete);

module.exports = routers;


